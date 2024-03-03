const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mytest';

async function main() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('cc');
  let d = await collection.find()
  console.log(await d.toArray())
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());