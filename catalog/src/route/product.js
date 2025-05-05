import {Router} from "express"
import { getAllProduct, createProduct } from "../controller/product.js";

const router = new Router()

router.get("/", getAllProduct);
router.post("/", createProduct);


export default router;