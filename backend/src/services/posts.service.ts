import type {
  DeleteResult,
  FindCursor,
  InsertOneResult,
  ObjectId,
  WithId,
} from 'mongodb'
import { db } from './mongodb.service.js'

import type { Post, PostPayload } from '../interfaces/post.js'

export const COLLECTION = 'posts'

export function getAll(
  skip: number = 0,
  limit: number = 10,
): FindCursor<WithId<Post>> {
  return db.collection<Post>(COLLECTION).find().skip(skip).limit(limit)
}

export function create(payload: PostPayload): Promise<InsertOneResult<Post>> {
  const post: Post = {
    ...payload,
    author: 'markus',
    dateCreated: new Date(),
    dateModified: null,
  }

  return db.collection<Post>(COLLECTION).insertOne(post)
}

export function get(_id: ObjectId): Promise<Post | null> {
  return db.collection<Post>(COLLECTION).findOne({ _id })
}

export function update(
  _id: ObjectId,
  payload: PostPayload,
): Promise<Post | null> {
  const post: Omit<Post, 'author' | 'dateCreated'> = {
    ...payload,
    dateModified: new Date(),
  }
  return db
    .collection<Post>(COLLECTION)
    .findOneAndUpdate({ _id }, { $set: post }, { returnDocument: 'after' })
}

export function remove(_id: ObjectId): Promise<DeleteResult> {
  return db.collection<Post>(COLLECTION).deleteOne({ _id })
}
