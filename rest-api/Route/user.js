import {Router} from "express"
import { createUser } from "../Controller/user.js";

const router = new Router()

router.post("/", createUser);

export default router;