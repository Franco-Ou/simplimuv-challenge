import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import CardsContainer from '@components/CardsContainer';
import { FC } from 'react';
import connectMongoDB from 'src/lib/mongoose';
import Product from 'src/models/Product';
import { ProductProps } from 'src/interfaces/products';
import { useRouter } from 'next/router';
import PaginationButton from '@components/PaginationButton';
import { PaginationButtonsContainer } from '@components/PaginationButton/styles';

const Home: FC<{ products: ProductProps[]; hasMoreData: boolean }> = ({ products, hasMoreData }) => {
  const router = useRouter();
  const queryPage = router.query.page ? Number(router.query.page) : 1;
  const handlePageChange = (page: number) => {
    router.push(`/?page=${page}`);
  };

  return (
    <>
      <Head>
        <title>SimpliMuv</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <CardsContainer products={products} />
      <PaginationButtonsContainer>
        <PaginationButton onClick={() => handlePageChange(1)} disabled={queryPage < 2}>
          First
        </PaginationButton>
        <PaginationButton onClick={() => handlePageChange(queryPage - 1)} disabled={queryPage < 2}>
          Previous
        </PaginationButton>
        <PaginationButton onClick={() => handlePageChange(queryPage + 1)} disabled={!hasMoreData}>
          Next
        </PaginationButton>
      </PaginationButtonsContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    await connectMongoDB();

    const page = parseInt(context.query.page as string) || 1;
    const perPage = 6;
    const skip = (page - 1) * perPage;

    const products = await Product.find().skip(skip).limit(perPage).exec();

    const totalProducts = await Product.countDocuments().exec();
    const hasMoreData = skip + perPage < totalProducts;

    return {
      props: { products: JSON.parse(JSON.stringify(products)), hasMoreData }
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      props: { products: [] }
    };
  }
};

export default Home;
