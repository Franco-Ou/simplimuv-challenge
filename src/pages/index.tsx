import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import CardsContainer from '@components/CardsContainer';
import { FC } from 'react';
import connectMongoDB from 'src/lib/mongoose';
import Bike from 'src/models/Bike';
import { Product } from 'src/interfaces/products';

const Home: FC<{ bikes: Product[] }> = ({ bikes }) => {
  return (
    <>
      <Head>
        <title>SimpliMuv</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <CardsContainer products={bikes} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    await connectMongoDB();
    const bikes = await Bike.find();
    return {
      props: { bikes: JSON.parse(JSON.stringify(bikes)) }
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      props: { bikes: [] }
    };
  }
};

export default Home;
