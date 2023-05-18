import "../styles/globals.css";
import "@fontsource/comic-neue";
import type { AppProps } from "next/app";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "../styles/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
          />
        </Head>
        <Flex
          padding={{ base: 4, md: 8 }}
          gap={{ base: 4, md: 8 }}
          margin="auto"
          maxWidth="1024px"
          minHeight={{
            base: "calc(100% + 3em)",
            md: "calc(100% + 4em)",
          }}
          direction="column"
        >
          <main style={{ flex: 1, display: "flex" }}>
            <Component {...pageProps} />
          </main>
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
