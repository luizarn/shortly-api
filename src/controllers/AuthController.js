import bcrypt from 'bcrypt'
import { db } from "../database/database.js"
import { v4 as uuidV4 } from 'uuid'

export async function signUp(req, res) {
  const {name, email, password} = res.locals.user
  const passwordHash = bcrypt.hashSync(password, 10)

  try {
    await db.query('INSERT INTO users (name, email, password, createdAt) values ($1, $2, $3, NOW())', [name, email, passwordHash])
    res.status(201).send("Usuário cadastrado com sucesso")
  } catch (error) {
    console.log(error)
    res.status(500).send("Deu um problema no servidor!")
  }
}

export async function signIn(req, res) {
  const user = res.locals.user
  const checkUser = res.locals.checkUser 

  const userToken = uuidV4()

  try {
    await db.query('INSERT INTO sessions (id_user, token, createdAt) values ($1, $2, NOW())', [checkUser.rows[0].id, userToken])
    res.status(200).send({ token: userToken })
  } catch (error) {
    console.log(error)
    res.status(500).send("Deu um problema no servidor!")
  }
}
