import { Router } from 'express'
import { signIn, signUp } from '../controllers/AuthController.js'
import { SignInValidation, SignUpValidation } from '../middlewares/AuthMiddleware.js'

const authRouter = Router()

authRouter.post("/signup", SignUpValidation, signUp)
authRouter.post("/signin", SignInValidation, signIn)

export default authRouter  