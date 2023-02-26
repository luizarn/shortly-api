import { db } from "../database/database.js"

export async function getUrlsByUser(req, res) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", '')

    const user = res.locals.user

    try {
        const { rows } = await db.query(`
        SELECT 
          users.id AS id,
          users.name AS name,
          SUM(urls.visit_count) AS "visitCount"
        FROM urls
        JOIN users
          ON urls.id_user = users.id  
        WHERE users.id=$1
        GROUP BY users.id
      `, [user.rows[0].id])
  
      const userData = rows[0]
      const { id, name, visitCount } = userData
  
      const urlsData = await db.query(`
        SELECT 
          urls.id AS id_url,
          urls.short_url AS "shortUrl",
          urls.url AS url,
          urls.visit_count AS visit_count
        FROM urls
        JOIN users
          ON urls.id_user = users.id  
        WHERE users.id=$1
        GROUP BY urls.id
      `, [user.rows[0].id])
  
      const urls = urlsData.rows.map(({ id_url, shortUrl, url, visit_count }) => ({
        id: id_url,
        shortUrl: shortUrl,
        url: url,
        visitCount: visit_count,
      }))
  
      const result = {
        id,
        name,
        visitCount,
        shortenedUrls: urls,
      }
  
      res.send(result)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  export async function getRanking(req, res) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", '')

    const user = res.locals.user

    try {
        const { rows } = await db.query(`
        SELECT 
          users.id AS id,
          users.name AS name,
          COUNT(urls.id) AS "linksCount",
          SUM(urls.visit_count) AS "visitCount"
        FROM urls
        JOIN users
          ON urls.id_user = users.id  
        GROUP BY users.id
        ORDER BY "visitCount" DESC
        LIMIT 10
      `)
  
      const result = rows.map(({ id, name, linksCount, visitCount }) => ({
        id: id,
        name: name,
        linksCount: linksCount,
        visitCount: visitCount,
      }))
  
      res.send(result)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }