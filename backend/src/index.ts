import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import { router as api } from './routes/index.js'
import { env } from './env.js'

const app = new Hono()

app.route('/api', api)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = env.PORT
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
