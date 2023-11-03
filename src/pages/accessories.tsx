import CardsContainer from '@components/CardsContainer';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import { ProductProps } from 'src/interfaces/products';
import connectMongoDB from 'src/lib/mongoose';
import Product from 'src/models/Product';

const AccessoriesPage: FC<{ accessories: ProductProps[] }> = ({ accessories }) => {
  return (
    <>
      <Head>
        <title>SimpliMuv</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <CardsContainer products={accessories} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    await connectMongoDB();
    const accessories = await Product.find({ category: 'accessory' });
    return {
      props: { accessories: JSON.parse(JSON.stringify(accessories)) }
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      props: { accessories: [] }
    };
  }
};

export default AccessoriesPage;
