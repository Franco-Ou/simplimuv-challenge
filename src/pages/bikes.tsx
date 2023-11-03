import CardsContainer from '@components/CardsContainer';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import { ProductProps } from 'src/interfaces/products';
import connectMongoDB from 'src/lib/mongoose';
import Product from 'src/models/Product';

const BikesPage: FC<{ bikes: ProductProps[] }> = ({ bikes }) => {
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
    const bikes = await Product.find({ category: 'bike' });
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

export default BikesPage;
