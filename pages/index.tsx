import type { NextPage } from "next";
import Head from "next/head";

import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import About from '../components/About';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Ticiano Morvan | Front-end developer</title>
      </Head>
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  );
};

export default Home;
