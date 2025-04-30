import {Router} from "express"
import { createUser, getAllUser, getUserByEmail, deleteUserByemail } from "../Controller/user.js";

const router = new Router()

router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:email", getUserByEmail);
router.delete("/:email", deleteUserByemail);

export default router;