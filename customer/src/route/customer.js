import {Router} from "express"
import { validateUserSchema } from "../middleware/validator.js"; 
import {verifyUser} from "../middleware/protected.js"
import { signUp, customerByEmail, login } from "../controller/customer.js";

const router = new Router()

router.post("/signup", validateUserSchema, signUp);
router.post("/login", login);
//router.get("/", getAllUser);
router.get("/userDetail/:email", verifyUser, customerByEmail);
//router.delete("/:email", deleteUserByemail);

export default router;