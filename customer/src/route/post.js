import {Router} from "express"
import { getAllPost, deletePostById, createPost, userPost } from "../controller/post.js";

const router = new Router()

router.post("/", createPost);
router.get("/", getAllPost);
router.delete("/:id", deletePostById);

// routes for releational query
router.get("/userPost/:userId", userPost);

export default router;