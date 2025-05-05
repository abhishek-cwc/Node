import {Router} from "express"
import productRoute from "./product.js"

const router = new Router();

router.use("/rest/v1/product", productRoute);

export default router;