import { MongoClient } from 'mongodb';
import { DB_CONNECTION_URL, localUrl, database } from './db-config';

export default async function connectDB() {
    const client = await MongoClient.connect(DB_CONNECTION_URL);
    const db = client.db(database);
    return [db, client]
}