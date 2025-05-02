import { 
    getAllUserServices, 
    getUserByEmailServices, 
    deleteUserByEmailServices,
    createUserServices
 } from "../model/user.js";

const handelResponse = (res, status, msg, data = null) => {
    res.status(status).json({
        data:data,
        message: msg
    });
}

export const getAllUser = async (req, res) => {
    try {
        const allUser = await getAllUserServices();
        handelResponse(res, 201, 'success', allUser)

    } catch (err) {
        next(err);
    }
}

export const getUserByEmail = async (req, res) => {
    const email = req.params.email;
    try {
        const user = await getUserByEmailServices(email);
        handelResponse(res, 201, 'success', user)
    } catch(err) {
        next(err)
    }
}

export const deleteUserByemail = async (req, res) => {
    const email = req.params.email;

    try {
        const user = await deleteUserByEmailServices(email);
        handelResponse(res, 201, 'success', user)
    } catch(err) {
        next(err)
    }
}

export const createUser = async (req, res, next) => {
    const {name, email, password } = req.body;
    try {
        const user = await createUserServices(name, email, password)
        handelResponse(res, 201, 'success', user)
    } catch(err) {
        next(err)
    }
}