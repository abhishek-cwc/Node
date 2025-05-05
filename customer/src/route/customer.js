import {Router} from "express"
import { validateUserSchema } from "../middleware/validator.js"; 
import {verifyUser} from "../middleware/protected.js"
import { signUp, customerByEmail, login } from "../controller/customer.js";
import { shipping } from "../controller/shipping.js";
import { billing } from "../controller/billing.js";

const router = new Router()

router.post("/signup", validateUserSchema, signUp);
router.post("/login", login);
//router.get("/", getAllUser);
router.get("/customerDetail/:email", verifyUser, customerByEmail);
//router.delete("/:email", deleteUserByemail);

router.post("/shipping", verifyUser, shipping);
router.post("/billing", verifyUser, billing);

export default router;