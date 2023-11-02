import { MongoClient, ServerApiVersion } from "mongodb";

let client: MongoClient | null = null;
let db: any = null;

export const connectToDatabase = async () => {
  if (!client) {
    const uri = process.env.MONGO_DB_URI!;

    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    try {
      await client.connect();
      db = client.db("simplimuv-db");
      console.log("Me conecté a la base")
    } catch (error) {
      console.error("Error connecting to the database:", error);
      throw error;
    }
  }

  if (!db) {
    throw new Error("Database connection has not been established.");
  }

  return db;
};