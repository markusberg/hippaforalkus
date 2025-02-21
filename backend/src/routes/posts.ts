import { Hono } from 'hono'
import { get, getAll } from '../services/posts.service.js'
import { ObjectId } from 'mongodb'
import { GetByObjectIdSchema } from '../interfaces/mongodb.js'
import { PostSchema } from '../interfaces/post.js'

export const COLLECTION = 'posts'
export const router = new Hono()

router.get('', async (c) => {
  const posts = await getAll().toArray()
  return c.json(posts)
})

router.get('/{id}', async (c) => {
  const id = new ObjectId(c.req.param('id'))
  const post = await get(id)
  return c.json(post)
})

// look into this later
import { createRoute } from '@hono/zod-openapi'
const route = createRoute({
  method: 'get',
  path: '/{id}',
  request: {
    params: GetByObjectIdSchema,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: PostSchema,
        },
      },
      description: 'Get a single post',
    },
  },
})
