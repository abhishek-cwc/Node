import Joi from "joi"

const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
})

export const validateUserSchema = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        res.status(400).json({
            status:400,
            message: error.details[0].message
        });
    } else {
        next()
    }
}