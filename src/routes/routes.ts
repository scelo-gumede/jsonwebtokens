import express from "express"
import { Login,Dashboard } from "../controllers/UserController"
import { authMiddleware } from "../middleware/authMiddleware"


const router = express.Router()

router.route("/login").post(Login)
router.route("/dashboard").get(authMiddleware,Dashboard)

export default router