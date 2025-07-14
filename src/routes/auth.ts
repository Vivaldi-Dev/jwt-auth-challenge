import { Router } from "express";
import { signup,login,getAllUsers } from "../controller/auth";
import { authenticateJWT } from "../middleware/authenticateJWT";
 
const authRotes: Router=Router()

authRotes.post('/signup',signup)
authRotes.post('/login',login)

authRotes.get("/users", authenticateJWT, getAllUsers);



export default authRotes