import {Router} from "express"
import userRoutes from "./customer.js";
import postRoutes from "./post.js";

const router = new Router();

router.use("/rest/V1/user", userRoutes)
router.use("/api/post", postRoutes)

export default router;