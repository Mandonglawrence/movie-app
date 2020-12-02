import bcrypt from "bcrypt";
import Joi from "joi";

const validateUsers = (user: Record<string, unknown>) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(30).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  return schema.validate(user, {
    abortEarly: false,
  });
};
const validateProfile = (profile: Record<string, unknown>) => {
  const schema = Joi.object({
    studentname: Joi.string().min(5).max(30).required(),
    studentemail: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    studentgender: Joi.string().min(4).max(10).required(),
    curriculum: Joi.string().min(5).max(30).required(),
    studentlevel: Joi.string().min(5).max(30).required(),
    studentclassId: Joi.string().min(5).max(50).required(),
  });
  return schema.validate(profile, {
    abortEarly: false,
  });
};
const encrypt = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export default { encrypt, validateUsers, validateProfile };
