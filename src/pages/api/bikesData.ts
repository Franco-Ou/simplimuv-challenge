// pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "src/lib/db";

const getBikesData = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDatabase();
    const collection = db?.collection("bikes"); // Replace with your collection name
    console.log("Collection: ", collection);
    res.status(200).json(collection);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default getBikesData;
