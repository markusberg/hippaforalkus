import { z } from 'zod'

export const PostSchema = z.object({
  title: z.string(),
  content: z.string(),
  date: z.date(),
})

export type Post = z.infer<typeof PostSchema>
