import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Home from "@/components/screens/Home";
import { CustomerService } from "@/services/customer.service";
import { Customers } from "@/interfaces";

const HomePage: NextPage<Customers> = ({ customers }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Home customers={customers} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<Customers> = async () => {
  const customers = await CustomerService.getCustomers();

  return {
    props: {
      customers,
    },
  };
};

export default HomePage;
