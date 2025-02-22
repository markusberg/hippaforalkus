import type {
  DeleteResult,
  FindCursor,
  InsertOneResult,
  ObjectId,
  WithId,
} from 'mongodb'
import { db } from './mongodb.service.js'

import type { Post } from '../interfaces/post.js'

export const COLLECTION = 'posts'

export function getAll(
  skip: number = 0,
  limit: number = 10,
): FindCursor<WithId<Post>> {
  return db.collection<Post>(COLLECTION).find().skip(skip).limit(limit)
}

export function create(
  post: Omit<Post, 'date'>,
): Promise<InsertOneResult<Post>> {
  const payload: Post = { ...post, date: new Date() }
  return db.collection<Post>(COLLECTION).insertOne(payload)
}

export function get(_id: ObjectId): Promise<Post | null> {
  return db.collection<Post>(COLLECTION).findOne({ _id })
}

export function update(
  _id: ObjectId,
  post: Omit<Post, 'date'>,
): Promise<Post | null> {
  const payload: Post = { ...post, date: new Date() }
  return db
    .collection<Post>(COLLECTION)
    .findOneAndUpdate({ _id }, { $set: payload }, { returnDocument: 'after' })
}

export function remove(_id: ObjectId): Promise<DeleteResult> {
  return db.collection<Post>(COLLECTION).deleteOne({ _id })
}
