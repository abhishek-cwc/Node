import {prisma} from "../DB/db-config.js";

export const createUser = async (req, res) => {

    const {name, email, password } = req.body;

    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if (findUser) {
        res.json("Email already exist!");
    }

}