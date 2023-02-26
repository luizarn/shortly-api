import { Router } from 'express'
import { createUrlShorten, getUrlById, goToUrlById } from '../controllers/UrlController.js'
import { authRoutesValidation } from '../middlewares/AuthMiddleware.js'
import { UrlValidation } from '../middlewares/UrlMiddleware.js'


const urlRouter = Router()

urlRouter.post("/urls/shorten", authRoutesValidation, UrlValidation, createUrlShorten)
urlRouter.get("/urls/:id",getUrlById)
urlRouter.get("/urls/open/:shortUrl", goToUrlById)

export default urlRouter  