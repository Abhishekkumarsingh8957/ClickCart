import express from "express";
import {registerController,loginController} from '../controllers/authcontroller.js'

//router object
const router = express.Router();


//routing

//REGISTER || METHOD POST
router.post("/register", registerController);

//login||post
router.post('/login',loginController)


export default router;