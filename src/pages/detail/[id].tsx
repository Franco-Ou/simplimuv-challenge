import DetailContainer from "@components/DetailContainer";
import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { Product } from "src/interfaces/products";
import { connectToDatabase } from "src/lib/db";

const ProductDetailPage: FC<{ product: Product }> = ({ product }) => {
  return (
    <>
      <DetailContainer />
    </>
  );
};

/* export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const db = await connectToDatabase();
  const collection = await db.collection("bikes");

  const product = await collection.findById(query.id).toArray();

  const serializableData = {
    ...product,
    _id: product._id.toString(),
  };

  return {
    props: { product: serializableData },
  };
}; */

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { id } = params as { id: string };

    const db = await connectToDatabase();
    const collection = db.collection("bikes");

    const product = await collection.findOne({ _id: id });

    if (!product) {
      return {
        notFound: true,
      };
    }

    const serializableData = {
      ...product,
      _id: product._id.toString(),
    };

    return {
      props: { product: serializableData },
    };
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    return {
      notFound: true, // Handle the error by marking the page as not found
    };
  }
};

export default ProductDetailPage;
