import { Router } from 'express'
import { createUrlShorten, deleteUrl, getUrlById, goToUrlById } from '../controllers/UrlController.js'
import { authRoutesValidation } from '../middlewares/AuthMiddleware.js'
import { UrlValidation } from '../middlewares/UrlMiddleware.js'


const urlRouter = Router()

urlRouter.post("/urls/shorten", authRoutesValidation, UrlValidation, createUrlShorten)
urlRouter.get("/urls/:id",getUrlById)
urlRouter.get("/urls/open/:shortUrl", goToUrlById)
urlRouter.delete("/urls/:id", authRoutesValidation, deleteUrl)

export default urlRouter  