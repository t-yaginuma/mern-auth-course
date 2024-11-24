import express from "express"; // import express
import {
  signupController,
  loginController,
  logoutController,
} from "../controllers/auth.controllers.js";

const router = express.Router();

router.get("/signup", signupController);
router.get("/login", loginController);
router.get("/logout", logoutController);

export default router;
