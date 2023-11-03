import connectMongoDB from 'src/lib/mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../models/Product';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      await connectMongoDB();

      const { productName, price, category, description, imageUrl } = req.body;

      const newProduct = new Product({
        productName,
        price,
        category,
        description,
        imageUrl
      });

      const savedProduct = await newProduct.save();

      res.status(201).json(savedProduct);
    } catch (error) {
      console.error('Error adding a product:', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).end();
  }
};
