import {Router} from "express"
import { validateUserSchema } from "../middleware/validator.js"; 
import { createUser, getAllUser, getUserByEmail, deleteUserByemail, loginUser } from "../controller/user.js";

const router = new Router()

router.post("/signup", validateUserSchema, createUser);
router.post("/login", loginUser);
router.get("/", getAllUser);
router.get("/:email", getUserByEmail);
router.delete("/:email", deleteUserByemail);

export default router;