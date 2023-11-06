import connectMongoDB from 'src/lib/mongoose';
import Lead from '../../models/Lead';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      connectMongoDB();

      const { name, lastName, email, phone } = req.body;

      const newLead = new Lead({
        name,
        lastName,
        email,
        phone
      });

      const savedLead = await newLead.save();

      res.status(201).json(savedLead);
    } catch (error) {
      console.error('Error adding a Lead:', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).end();
  }
};
