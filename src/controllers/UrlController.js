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

      res.status(201).send({ id: post.rows[0].id, shortUrl})

    } catch (error) {
      console.log(error)
      res.status(500).send("Deu um problema no servidor!")
    }
  }
  

export async function getUrlById(req, res) {
  const { id } = req.params
  try {
    const idUrl = await db.query('SELECT * FROM urls WHERE id=$1', [id])

    console.log(idUrl)

    if (idUrl.rowCount === 0) return res.sendStatus(404)

    res.send({id: idUrl.rows[0].id, shortUrl: idUrl.rows[0].short_url, "url": idUrl.rows[0].url})
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export async function goToUrlById(req, res) {
  const { shortUrl } = req.params
  try {
    const url = await db.query('SELECT * FROM urls WHERE short_url=$1', [shortUrl])

    if (url.rowCount === 0) return res.sendStatus(404)

    await db.query('UPDATE urls SET visit_count = visit_count +1 WHERE short_url=$1', [shortUrl])
    
    res.redirect(url.rows[0].url)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export async function deleteUrl(req, res) {
  const { authorization } = req.headers
  const token = authorization?.replace("Bearer ", '')

  const { id } = req.params

  try {
    const { rowCount } = await db.query('SELECT * FROM urls WHERE id=$1', [id])

    if (rowCount === 0) return res.sendStatus(404)

    await db.query("DELETE FROM urls WHERE id=$1", [id])

    res.sendStatus(204)
  } catch (error) {
    res.status(500).send(error.message)
  }
}