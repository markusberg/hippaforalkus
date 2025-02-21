import type {
  DeleteResult,
  FindCursor,
  InsertOneResult,
  ObjectId,
  WithId,
} from 'mongodb'
import type { Post } from '../interfaces/post.js'
import { db } from './mongodb.service.js'

export const COLLECTION = 'posts'

export function getAll(): FindCursor<WithId<Post>> {
  return db.collection<Post>(COLLECTION).find()
}

export function create(post: Post): Promise<InsertOneResult<Post>> {
  return db.collection<Post>(COLLECTION).insertOne(post)
}

export function get(_id: ObjectId): Promise<Post | null> {
  return db.collection<Post>(COLLECTION).findOne({ _id })
}

export function update(_id: ObjectId, post: Post): Promise<Post | null> {
  return db
    .collection<Post>(COLLECTION)
    .findOneAndUpdate({ _id }, { $set: post }, { returnDocument: 'after' })
}

export function remove(_id: ObjectId): Promise<DeleteResult> {
  return db.collection<Post>(COLLECTION).deleteOne({ _id })
}
