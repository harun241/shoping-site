import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGO_URI;
const dbName = process.env.DB_NAME;

let cachedClient = global.mongoClient;
let cachedDb = global.mongoDb;

if (!cachedClient) {
  cachedClient = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  cachedDb = cachedClient.db(dbName);
  global.mongoClient = cachedClient;
  global.mongoDb = cachedDb;
}

export default async function dbconnect(collectionName) {
  if (!cachedClient.isConnected?.()) await cachedClient.connect();
  return cachedDb.collection(collectionName);
}
