import { z } from '@hono/zod-openapi'
import { ObjectId } from 'mongodb'

const ObjectIdSchema = z.instanceof(ObjectId)

export const StringToObjectIdSchema = z.preprocess(
  (val) => typeof val === 'string' && new ObjectId(val),
  ObjectIdSchema,
)

export const GetByObjectIdSchema = z.object({
  id: StringToObjectIdSchema.openapi({
    param: {
      name: 'id',
      in: 'path',
      required: true,
    },
    example: '507f1f77bcf86cd799439011',
  }),
})

export type WithStringId<T> = Omit<T, 'id'> & { id: string }
