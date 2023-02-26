import { Router } from 'express'
import { getRanking, getUrlsByUser } from '../controllers/UsersController.js'
import { authRoutesValidation } from '../middlewares/AuthMiddleware.js'



const usersRouter = Router()

usersRouter.get("/users/me", authRoutesValidation, getUrlsByUser )
usersRouter.get("/ranking", getRanking)

export default usersRouter  