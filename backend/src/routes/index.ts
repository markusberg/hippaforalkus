import { Hono } from 'hono'

import { router as posts } from './posts.js'

export const router = new Hono()

router.route('/posts', posts)

router.get('', (c) => {
  return c.text('Hello Hono!')
})
