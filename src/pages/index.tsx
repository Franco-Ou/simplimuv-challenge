import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import CardsContainer from '@components/CardsContainer';
import { FC } from 'react';
import connectMongoDB from 'src/lib/mongoose';
import Product from 'src/models/Product';
import { ProductProps } from 'src/interfaces/products';

const Home: FC<{ products: ProductProps[] }> = ({ products }) => {
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
    await connectMongoDB();
    const products = await Product.find();
    return {
      props: { products: JSON.parse(JSON.stringify(products)) }
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      props: { products: [] }
    };
  }
};

export default Home;
