import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL!;

if (!uri) {
  throw new Error("Please add your MONGODB_URL to .env.local");
}

const mongoClient = new MongoClient(uri);

export const client = mongoClient.db("SCIC_ASSIGNMENT_3");