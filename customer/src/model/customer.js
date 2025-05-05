import prisma from "../config/db-config.js";
import bcrypt, { compare } from "bcrypt"
import {genrateToken} from "../service/jwt.js"

export const getAllCustomer = async () => {
    //const allUser = await prisma.user.findMany();
    const allUser = await prisma.$queryRaw`SELECT * FROM customer`;
    return allUser;
}

export const getCustomerByEmail = async (email) => {    
    const user = await prisma.customer.findUnique({
        where: {email: email},
        select: {
            id: true,
            name: true,
            email: true,
            customer_billing_address: {
                select: {
                    id: true,
                    street: true,
                    customer_id: true
                }
            },
            customer_shipping_address: {
                select: {
                    id: true,
                    street: true,
                    customer_id: true
                }
            }
        }
    });    
   // const [user] = await prisma.$queryRaw`SELECT * FROM customer where email = ${email} `;
    if (!user) {
        throw new Error("User not found!!")
    }
    return user;
}

export const deleteCustomerByEmail = async (email) => {
    const user = await prisma.customer.delete({
        where: {email: email}
    })
    return true;
}

export const createCustomer = async (name, email, password) => {
    const findUser = await prisma.customer.findUnique({
        where: {
            email: email
        }
    });
    if (findUser) {
        throw new Error("Email already exist!");
    } else {
        return await create(name, email, password);
    }
}

async function create(name, email, userPassword)
{
    const password = await bcrypt.hash(userPassword, 10);

    const newUser = await prisma.customer.create({
        data: { name, email, password }, // <- Make sure these fields match your model
        });
    const { password: _, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
}

export const loginCustomer = async(email, inputPassword) => {
    const user = await prisma.customer.findUnique({
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