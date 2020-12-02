import { db, sql } from "../stores/pg";
import { userType } from "../schema/types/index";

export async function getUserByEmail(email: string) {
  try {
    return db
      .query(sql`SELECT * FROM users WHERE email = ${email}`)
      .then(([data]) => data);
  } catch (error) {
    console.error(error);
    return error;
  }
}

//add user
export async function createUser(data: userType) {
  try {
    return db
      .query(
        sql`INSERT INTO users(name, email, password) VALUES(${data.name}, ${data.email}, ${data.password}) RETURNING *`,
      )
      .then(([data]) => data);
  } catch (error) {
    return error.message;
  }
}

//get user by Id
export async function getUserById(id: string) {
  try {
    return db
      .query(sql`SELECT * FROM user WHERE id = ${id}`)
      .then(([data]) => data);
  } catch (error) {
    console.error(error);
    return -1;
  }
}

export async function updatePassword(newpassword: string, id: string) {
  try {
    return db
      .query(sql`UPDATE users SET password = ${newpassword} WHERE id = ${id}`)
      .then((data) => data);
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export async function updateUserEmailVerificationStatus(
  data: string,
  link: string,
) {
  try {
    return db
      .query(
        sql`UPDATE company SET email_verified = ${data} WHERE email_verified_token = ${link}`,
      )
      .then(([data]) => data);
  } catch (error) {
    console.error(error);
    return -1;
  }
}
