import jwt from "jsonwebtoken"

export const verifyUser = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        throw new Error("Oauth header not found!")
    }
    const token = authorization.split(' ')[1];
    if (!token) {
        throw new Error("token not found!")
    }
    try {
        const user = jwt.verify(token, process.env.SECERET)
        req.user = user;
    } catch(err) {
        throw new Error("Invalid token!")
    }
    next()
}
