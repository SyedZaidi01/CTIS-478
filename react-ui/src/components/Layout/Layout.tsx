import Head from "next/head";
import React, { Fragment } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>CTIS 478 - PROJECT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      {children}

      <Footer />
    </Fragment>
  );
};

export default Layout;
