import validate from "../schema/validation";
import { db, sql } from "../stores/pg";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
async function registerUser(body: Record<string, unknown>) {
  try {
    const { name, email, password } = await body;
    const { error, value } = validate.validateUsers({
      name,
      email,
      password,
    });
    if (error) return error.details[0].message;

    const encryptedPassword = await validate.encrypt(value.password);
    const is_verified = false;
    const is_admin = false;

    const newUser = await db
      .query(
        sql`
      insert into users (name,email, password, is_verified, is_admin) values (${value.name}, ${value.email}, ${encryptedPassword}, ${is_verified}, ${is_admin}) returning *`,
      )
      .then(async (data) => {
        await verifyEmail(data);
        return data;
      })
      .catch((error) => {
        console.log(error.message);
      });
    return newUser;
  } catch (error) {
    throw Error(error.message);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function verifyEmail(data: any) {
  //   const token = jwt.sign({ id: data[0]["id"] }, "process.env.secret_id", {
  //     expiresIn: "10m",
  //   });

  const url = `http://192.168.88.38:5000/login`;
  const output = `
  <p> Hi ${data[0]["name"]}</>
  <p> Click the link to verify your email</p>
  <p>${url}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.user_key,
      pass: process.env.password_key,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Nodemailer Contact" <accessfullstack@gmail.com>',
    to: `${data[0]["email"]}`,
    subject: "Node Contact Request",
    text: "Hello world?",
    html: output,
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    return "Email has been sent";
  });
}

async function confirmEmail(resetLink: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const verify: any = await jwt.verify(resetLink, "process.env.secret_id");
    const getIsVerified = await db.query(
      sql`SELECT is_verified FROM users WHERE id = ${verify.id}`,
    );

    if (getIsVerified[0]["is_verified"] !== true) {
      getIsVerified[0]["is_verified"] = true;
      await sql`update users set is_verified = ${getIsVerified[0]["is_verified"]} WHERE id = ${verify.id}`;
      return "Account Verified Succesfully, You can now Login";
    } else {
      return "Account already Verified";
    }
  } catch (error) {
    return error.message;
  }
}

export default { registerUser, confirmEmail };
