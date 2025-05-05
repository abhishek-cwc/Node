import {Router} from "express"
import { validateUserSchema } from "../middleware/validator.js"; 
import {verifyUser} from "../middleware/protected.js"
import { createUser, getAllUser, getUserByEmail, deleteUserByemail, loginUser } from "../controller/user.js";

const router = new Router()

router.post("/signup", validateUserSchema, createUser);
router.post("/login", loginUser);
router.get("/", getAllUser);
router.get("/userDetail/:email", verifyUser, getUserByEmail);
router.delete("/:email", deleteUserByemail);

export default router;