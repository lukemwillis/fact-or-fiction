import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fact or Fiction</title>
      </Head>
      <Flex
        width="100%"
        alignItems="center"
        justifyContent="center"
        direction="column"
        gap="8"
      >
        Fact or Fiction?
      </Flex>
    </>
  );
};

export default Home;
