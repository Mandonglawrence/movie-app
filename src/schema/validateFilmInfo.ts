import Joi from "joi";

export const validateMFilmInfo = (data: Record<string, unknown>) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
      ticket_price: Joi.string().required(),
      country: Joi.string().required(),
      genre: Joi.string().required(),
      image_link: Joi.string().required(),
    });
    const result = schema.validate(data);
    return result;
  } catch (error) {
    return;
  }
};
