import { Hono } from 'hono'
import { db } from '../services/mongodb.service.js'

export const COLLECTION = 'posts'
export const router = new Hono()

router.get('', async (c) => {
  const posts = await db.collection(COLLECTION).find().toArray()
  return c.json(posts)
})
