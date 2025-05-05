import { 
    getCustomerByEmail, 
    createCustomer,
    loginCustomer
 } from "../model/customer.js";

const handelResponse = (res, status, msg, data = null) => {
    res.status(status).json({
        data:data,
        message: msg
    });
}

// export const getAllUser = async (req, res, next) => {
//     try {
//         const allUser = await getAllCustomer();
//         handelResponse(res, 201, 'success', allUser)

//     } catch (err) {
//         next(err);
//     }
// }

export const customerByEmail = async (req, res, next) => {
    const email = req.params.email;
    try {
        const user = await getCustomerByEmail(email);
        handelResponse(res, 201, 'success', user)
    } catch(err) {
        next(err)
    }
}

// export const deleteUserByemail = async (req, res, next) => {
//     const email = req.params.email;
//     try {
//         const user = await deleteUserByEmailServices(email);
//         handelResponse(res, 201, 'success', user)
//     } catch(err) {
//         next(err)
//     }
// }

export const signUp = async (req, res, next) => {
    const {name, email, password } = req.body;
    try {
        const user = await createCustomer(name, email, password)
        handelResponse(res, 201, 'success', user)
    } catch(err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    const {email, password } = req.body;
    try {
        const user = await loginCustomer(email, password)
        handelResponse(res, 201, 'success', user)
    } catch(err) {
        next(err)
    }
}