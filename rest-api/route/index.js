import {Router} from "express"
import userRoutes from "./user.js";

const router = new Router();

// router.post("/api/user", (req, res) => {
//     res.status(400).json("Email already exist!");
// });
router.use("/api/user", userRoutes)

export default router;