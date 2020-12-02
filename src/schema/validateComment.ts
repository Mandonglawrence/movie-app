import Joi from "joi";

export const validateComment = (data: Record<string, unknown>) => {
  try {
    const schema = Joi.object({
      films_id: Joi.string().required(),
      comment: Joi.string().required(),
      user_id: Joi.string().required(),
    });
    const result = schema.validate(data);
    return result;
  } catch (error) {
    return;
  }
};
