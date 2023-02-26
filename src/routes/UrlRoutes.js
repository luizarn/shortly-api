import { Router } from 'express'
import { createUrlShorten, getUrlById } from '../controllers/UrlController.js'
import { authRoutesValidation } from '../middlewares/AuthMiddleware.js'
import { UrlValidation } from '../middlewares/UrlMiddleware.js'


const urlRouter = Router()

urlRouter.post("/urls/shorten", authRoutesValidation, UrlValidation, createUrlShorten)
urlRouter.get("/urls/:id",getUrlById)

export default urlRouter  