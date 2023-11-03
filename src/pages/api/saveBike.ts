import connectMongoDB from 'src/lib/mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import Bike from '../../models/Bike';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      await connectMongoDB();

      const { productName, price, description, imageUrl } = req.body;

      const newBike = new Bike({
        productName,
        price,
        description,
        imageUrl
      });

      const savedBike = await newBike.save();

      res.status(201).json(savedBike);
    } catch (error) {
      console.error('Error adding a Bike:', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).end();
  }
};
