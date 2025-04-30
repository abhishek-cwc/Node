import prisma from "../DB/db-config.js";

export const createUser = async (req, res) => {
    const {name, email, password } = req.body;

    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if (findUser) {
        res.status(400).json("Email already exist11!");
    } else {
        const newUser = await prisma.user.create({
            data: { name, email, password }, // <- Make sure these fields match your model
          });
    
        res.status(200).json({ data: newUser, message:"User created1!"})
    }
}