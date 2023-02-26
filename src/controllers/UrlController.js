import { db } from "../database/database.js"
import { nanoid } from 'nanoid'

export async function createUrlShorten(req, res) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", '')

    const url = res.locals.url
    const user = res.locals.user

    const shortUrl = nanoid(8)

    try {
      await db.query('INSERT INTO urls (id_user, url, short_url, createdAt) values ($1, $2, $3, NOW())', [user.rows[0].id, url, shortUrl ])
      const post = await db.query('SELECT * FROM urls WHERE short_url=$1', [shortUrl])
      console.log(post)
      res.status(201).send({ id: post.rows[0].id, shortUrl})
    } catch (error) {
      console.log(error)
      res.status(500).send("Deu um problema no servidor!")
    }
  }
  