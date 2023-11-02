import type { GetServerSideProps } from "next";
import Head from "next/head";
import CardsContainer from "@components/CardsContainer";
import { connectToDatabase } from "src/lib/db";

const Home: React.FC<{ data: any[] }> = ({ data }) => {
  console.log("DATA: ", data);
  return (
    <>
      <Head>
        <title>SimpliMuv</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CardsContainer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const db = await connectToDatabase();
  const collection = await db.collection("bikes");

  const data = await collection.find({}).toArray();

  const serializableData = data.map((item: any) => ({
    ...item,
    _id: item._id.toString(),
  }));


  return {
    props: { data: serializableData },
  };
};

export default Home;
