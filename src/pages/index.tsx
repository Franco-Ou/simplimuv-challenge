import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import CardsContainer from '@components/CardsContainer';
import { connectToDatabase } from 'src/lib/db';
import { Product } from 'src/interfaces/products';
import { FC } from 'react';

const Home: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <>
      <Head>
        <title>SimpliMuv</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <CardsContainer products={products} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const db = await connectToDatabase();
    const collection = await db.collection('bikes');
    const products = await collection.find({}).toArray();
    const serializableData = products.map((item: any) => ({
      ...item,
      _id: item._id.toString()
    }));
    return {
      props: { products: serializableData }
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      props: { products: [] }
    };
  }
};

export default Home;
