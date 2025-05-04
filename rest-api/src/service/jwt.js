import jwt from "jsonwebtoken"

export const genrateToken = (userData) => {
    if (!userData) {
        throw new Error("User object not found!")
    }
    return jwt.sign(userData, process.env.SECERET);
}

export const verifyToken = (token) => {
    
}
