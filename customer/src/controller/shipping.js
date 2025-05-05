import { 
    createShipping, 
 } from "../model/shipping.js";

const handelResponse = (res, status, msg, data = null) => {
    res.status(status).json({
        data:data,
        message: msg
    });
}

export const shipping = async (req, res, next) => {
    try {
        const shipping = await createShipping(req);
        handelResponse(res, 201, 'success', shipping)
    } catch (err) {
        next(err)
    }
}