/* // pages/api/mongodb.ts
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ServerApiVersion } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let client; // Declare the client variable here

  try {
    // Replace <connection string> with your MongoDB Atlas connection string
    const uri = `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.d7dfj5r.mongodb.net/?retryWrites=true&w=majority`;

    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();

    // Perform database operations here, e.g., fetch data from a collection
    const database = client.db("simplimuv-db");
    const collection = database.collection("bikes");
    const data = await collection.find({}).toArray();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error connecting to the database" });
    if (client) {
      await client.close();
    }
  }
};

export default handler;
 */