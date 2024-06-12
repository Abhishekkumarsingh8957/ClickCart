import express from "express";



import {
  registerController,
  loginController,
  testController,
} from "../controllers/authcontroller.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";


//router object
const router = express.Router();

//routing

//REGISTER || METHOD POST
router.post("/register", registerController);


//login||post
router.post('/login',loginController)

//test routes
router.get("/test", requireSignIn, isAdmin, testController);


export default router;
