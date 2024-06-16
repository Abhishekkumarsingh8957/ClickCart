import express from "express";

import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
 
} from "../controllers/authcontroller.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";


//router object
const router = express.Router();

//routing

//REGISTER || METHOD POST
router.post("/register", registerController);


//login||post
router.post('/login',loginController);

//Forgot password || post
router.post('/forgot-password',forgotPasswordController);
//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
