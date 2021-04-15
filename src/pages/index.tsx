import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import HomeView from "../views/Home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Covid App 1.0</title>
      </Head>
      <HomeView />
    </div>
  );
};
export default Home;
