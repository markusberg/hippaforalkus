import { loadAndParse } from '@markusberg/key-value-parser'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { z } from 'zod'

const NodeEnvSchema = z
  .enum(['development', 'production', 'test'])
  .default('development')
type NodeEnv = z.infer<typeof NodeEnvSchema>

const EnvSchema = z.object({
  PORT: z.coerce.number().int().default(3000),
  BASE_URL: z.string(),
  MONGO_HOST: z.string(),
  MONGO_AUTH: z.string(),
  MONGO_OPTS: z.string(),
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const APP_ROOT_DIR = join(__dirname, '..', '..')

const nodeEnv: NodeEnv = NodeEnvSchema.parse(process.env.NODE_ENV)
let env: z.infer<typeof EnvSchema>

try {
  const filepath = resolve(APP_ROOT_DIR, '.env')
  const parsed = loadAndParse(filepath)
  env = EnvSchema.parse(parsed)
} catch (err) {
  console.error(err)
  process.exit(1)
}

export { APP_ROOT_DIR, env, nodeEnv }
