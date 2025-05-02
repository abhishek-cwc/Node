import prisma from "../config/db-config.js";

export const getAllUserServices = async () => {
    const allUser = await prisma.user.findMany();
    return allUser;
}

export const getUserByEmailServices = async (email) => {
    const user = await prisma.user.findUnique({
        where: {email: email},
    });
    return user;
}

export const deleteUserByEmailServices = async (email) => {
    const user = await prisma.user.delete({
        where: {email: email}
    })
    return true;
}

export const createUserServices = async (name, email, password) => {
    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    if (findUser) {
        throw new Error("Email already exist!");
    } else {
        const newUser = await prisma.user.create({
            data: { name, email, password }, // <- Make sure these fields match your model
          });
    
         return newUser; 
    }
}