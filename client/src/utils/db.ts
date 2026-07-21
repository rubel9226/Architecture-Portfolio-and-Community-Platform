import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL!;

if (!uri) {
  throw new Error("Please add your MONGODB_URL");
}

const client = new MongoClient(uri);

await client.connect();

const db = client.db("SCIC_ASSIGNMENT_3");

export { client, db };