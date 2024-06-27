import express from "express";

import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController, 
} from "../controllers/authcontroller.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";


//router object
const router = express.Router();

//routing

//REGISTER || METHOD POST
router.post('/register', registerController);


//login||post
router.post('/login',loginController);

//Forgot password || post
router.post('/forgot-password',forgotPasswordController);
//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected user-route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected admin-route auth
router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);


//orders
router.get("/orders", requireSignIn, getOrdersController);

export default router;
