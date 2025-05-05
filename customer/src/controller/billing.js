import { 
    createBilling, 
 } from "../model/billing.js";

const handelResponse = (res, status, msg, data = null) => {
    res.status(status).json({
        data:data,
        message: msg
    });
}

export const billing = async (req, res, next) => {
    try {
        const billing = await createBilling(req);
        handelResponse(res, 201, 'success', billing)
    } catch (err) {
        next(err)
    }
}