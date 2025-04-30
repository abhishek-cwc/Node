import {Router} from "express"
import userRoutes from "./user.js";
import postRoutes from "./post.js";

const router = new Router();

router.use("/api/user", userRoutes)
router.use("/api/post", postRoutes)

export default router;