import { z } from 'zod'

export const PostSchema = z.object({
  title: z.string(),
  content: z.string(),
  dateCreated: z.date(),
  dateModified: z.date().nullable(),
  author: z.string(),
  state: z.enum(['draft', 'published']),
})

export type Post = z.infer<typeof PostSchema>

export const PostPayloadSchema = PostSchema.omit({
  author: true,
  dateCreated: true,
  dateModified: true,
})

export type PostPayload = z.infer<typeof PostPayloadSchema>
