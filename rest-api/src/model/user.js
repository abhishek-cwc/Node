import prisma from "../config/db-config.js";
import bcrypt, { compare } from "bcrypt"
import {genrateToken} from "../service/jwt.js"

export const getAllUserServices = async () => {
    //const allUser = await prisma.user.findMany();
    const allUser = await prisma.$queryRaw`SELECT * FROM User`;
    return allUser;
}

export const getUserByEmailServices = async (email) => {    
    // const user = await prisma.user.findUnique({
    //     where: {email: email},
    // });    
    const user = await prisma.$queryRaw`SELECT * FROM User where email = ${email} `;
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
        return await createUser(name, email, password);
    }
}

async function createUser(name, email, userPassword)
{
    const password = await bcrypt.hash(userPassword, 10);

    const newUser = await prisma.user.create({
        data: { name, email, password }, // <- Make sure these fields match your model
        });
    const { password: _, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
}

export const loginUserServices = async(email, inputPassword) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (user) {
        await comparePassword(user.password, inputPassword);
        const userwithToken = genrateToken(user)
        const payload = {
            token: userwithToken
        }
        return payload;
    } else {
        throw new Error("Email not exist, Please check!");
    }
}

async function comparePassword(dbPassword, inputPassword)
{
    const isMatch = await bcrypt.compare(inputPassword, dbPassword);
        if(!isMatch) {
            throw new Error("Please check password!");
        }
    return isMatch;
}