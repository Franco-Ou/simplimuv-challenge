import DetailContainer from "@components/DetailContainer";
import { ObjectId } from "mongodb";
import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { Product } from "src/interfaces/products";
import { connectToDatabase } from "src/lib/db";

const ProductDetailPage: FC<{ product: Product }> = ({ product }) => {
  return (
    <>
      <DetailContainer product={product} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const db = await connectToDatabase();
  const collection = await db.collection("bikes");

  const product = await collection.findOne({
    _id: new ObjectId(id),
  });

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
};

export default ProductDetailPage;
