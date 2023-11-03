import DetailContainer from '@components/DetailContainer';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { Product } from 'src/interfaces/products';
import connectMongoDB from 'src/lib/mongoose';
import Bike from 'src/models/Bike';

const ProductDetailPage: FC<{ product: Product }> = ({ product }) => {
  return (
    <>
      <DetailContainer product={product} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  try {
    await connectMongoDB();
    const product = await Bike.findById(id);

    if (!product) {
      return {
        notFound: true
      };
    }

    return {
      props: { product: JSON.parse(JSON.stringify(product)) }
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      notFound: true
    };
  }
};

export default ProductDetailPage;
