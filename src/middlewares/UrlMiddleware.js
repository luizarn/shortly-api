import { db } from '../database/database.js'
import { urlSchema } from '../schemas/UrlSchema.js'


export async function UrlValidation(req, res, next) {
  const url = req.body

  const { error } = urlSchema.validate(url, { abortEarly: false })

  if (error) {
    const errorsMessage = error.details.map(detail => detail.message)
    return res.status(422).send(errorsMessage)
  }

  res.locals.url = url

  next()
}



