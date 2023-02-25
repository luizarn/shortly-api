import { db } from '../database/database.js'
import { loginSchema, userSchema } from '../schemas/UserSchema.js'
import bcrypt from 'bcrypt'

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

export async function SignInValidation(req, res, next) {
        const user = req.body

        const { error } = loginSchema.validate(user, { abortEarly: false })

        if (error) {
          const errorsMessage = error.details.map(detail => detail.message)
          return res.status(422).send(errorsMessage)
        }                                                                                                                           
      
        try {
            const checkUser = await db.query('SELECT * FROM users WHERE email =$1', [user.email])
            if (checkUser.rowCount === 0) return res.status(401).send('Não autorizado!')
      
            const passwordIsOk = bcrypt.compareSync(user.password, checkUser.rows[0].password)
            if (!passwordIsOk) return res.status(401).send('Não autorizado')

          res.locals.user = user
          res.locals.checkUser = checkUser
         
        } catch (error) {
          console.error(error)
          return res.status(500).send('Houve um problema no servidor')
        }
        next()
      }