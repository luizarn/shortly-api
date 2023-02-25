
import { db } from '../database/database.js'
import { userSchema } from '../schemas/UserSchema.js'

export async function SignUpValidation(req, res, next) {
  const user = req.body

  const { error } = userSchema.validate(user, { abortEarly: false })

  if (error) {
    const errorsMessage = error.details.map(detail => detail.message)
    return res.status(422).send(errorsMessage)
  }

  const checkUser = await db.query('SELECT * FROM users WHERE email =$1', [user.email])
  if (checkUser.rowCount !== 0) return res.status(409).send('Esse usuário já existe')

  res.locals.user = user

  next()

}

