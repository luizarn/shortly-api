import { Router } from 'express'
import { createUrlShorten } from '../controllers/UrlController.js'
import { authRoutesValidation } from '../middlewares/AuthMiddleware.js'
import { UrlValidation } from '../middlewares/UrlMiddleware.js'


const urlRouter = Router()

urlRouter.post("/urls/shorten", authRoutesValidation, UrlValidation, createUrlShorten)


export default urlRouter  