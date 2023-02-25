import { Router } from 'express'
import { signUp } from '../controllers/AuthController.js'
import { SignUpValidation } from '../middlewares/AuthMiddleware.js'


const authRouter = Router()

authRouter.post("/signup", SignUpValidation, signUp)

export default authRouter  