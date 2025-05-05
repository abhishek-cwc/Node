import {Router} from "express"
import customerRoutes from "./customer.js";
import postRoutes from "./post.js";

const router = new Router();

router.use("/rest/V1/customer", customerRoutes)
router.use("/api/post", postRoutes)

export default router;