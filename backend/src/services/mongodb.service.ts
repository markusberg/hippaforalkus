import { Db, MongoClient, type MongoClientOptions } from 'mongodb'
import { env } from '../env.js'

const host = `${env.MONGO_AUTH}@${env.MONGO_HOST}`
const opts = env.MONGO_OPTS
const dbName = 'hippaforalkus'
const uri = `mongodb://${host}${opts}`
const options: MongoClientOptions = {
  maxPoolSize: 20,
}

console.log('Connecting to mongodb...')
const client: MongoClient = await MongoClient.connect(uri, options)
export const db: Db = client.db(dbName)
console.log('Connected to mongodb')
