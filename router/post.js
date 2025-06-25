import express from "express"
import postController from "../controllers/postControllers.js"

const router = express.Router()

router.get("/", postController.index)
router.get("/:id", postController.show)

export default router