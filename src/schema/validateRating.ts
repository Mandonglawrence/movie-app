import Joi from "joi";

export const validateRating = (data: Record<string, unknown>) => {
  try {
    const schema = Joi.object({
      films_id: Joi.string().required(),
      rating: Joi.number().required(),
      total_rated_users: Joi.number().required(),
    });
    const result = schema.validate(data);
    return result;
  } catch (error) {
    return;
  }
};
