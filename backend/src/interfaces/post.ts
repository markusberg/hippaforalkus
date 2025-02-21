import { z } from 'zod'

export const PostSchema = z.object({
  title: z.string(),
  content: z.string(),
})

export type Post = z.infer<typeof PostSchema>
