export const verifyUser = (req, res, next) => {

    const token = req.headers.authorization;
    if (!token) {
        throw new Error("Token is missing!")
    }
    
    next()
}