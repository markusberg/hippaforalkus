import { Hono } from 'hono'
import { StatusCodes } from 'http-status-codes'
import { ObjectId } from 'mongodb'
import { createRoute, z } from '@hono/zod-openapi'

import {
  create,
  get,
  getAll,
  remove,
  update,
} from '../services/posts.service.js'
import { GetByObjectIdSchema } from '../interfaces/mongodb.js'

import { PostPayloadSchema, PostSchema } from '../interfaces/post.js'

// ---

export const COLLECTION = 'posts'
export const router = new Hono()

router.get('', async (c) => {
  const skip = z.number().int().min(0).default(0).parse(c.req.query('offset'))
  const limit = z.number().int().min(0).default(10).parse(c.req.query('limit'))
  const posts = await getAll(skip, limit).toArray()
  return c.json(posts)
})

router.get('/{id}', async (c) => {
  const id = new ObjectId(c.req.param('id'))
  const post = await get(id)
  return c.json(post)
})

router.post('', async (c) => {
  const body = await c.req.json()
  const payload = PostPayloadSchema.parse(body)
  await create(payload)
  return c.status(StatusCodes.NO_CONTENT)
})

router.put('/{id}', async (c) => {
  const id = new ObjectId(c.req.param('id'))
  const payload = await c.req.json()
  await update(id, payload)
  return c.status(StatusCodes.NO_CONTENT)
})

router.delete('/{id}', async (c) => {
  const id = new ObjectId(c.req.param('id'))
  await remove(id)
  return c.status(StatusCodes.NO_CONTENT)
})

// look into this later
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
