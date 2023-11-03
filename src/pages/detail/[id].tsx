import DetailContainer from '@components/DetailContainer';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { ProductProps } from 'src/interfaces/products';
import connectMongoDB from 'src/lib/mongoose';
import Product from 'src/models/Product';

const ProductDetailPage: FC<{ product: ProductProps }> = ({ product }) => {
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
    const product = await Product.findById(id);

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
