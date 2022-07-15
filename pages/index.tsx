import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Ticiano Morvan | Front-end developer</title>
      </Head>
      <Hero />
    </>
  );
};

export default Home;
