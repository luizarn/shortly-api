import { Router } from 'express'
import { getUrlsByUser } from '../controllers/UsersController.js'
import { authRoutesValidation } from '../middlewares/AuthMiddleware.js'



const usersRouter = Router()

usersRouter.get("/users/me", authRoutesValidation, getUrlsByUser )
// usersRouter.post("/signin", SignInValidation, signIn)

export default usersRouter  