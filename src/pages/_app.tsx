import React, { memo } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Head from "next/head";
import "reset-css";

const App: NextPage<AppProps> = ({ pageProps, Component }) => (
  <ThemeProvider theme={{}}>
    <Head>
      <title>napochaan room</title>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default memo(App);

const GlobalStyle = createGlobalStyle`
 body {
   padding: 0;
   margin: 0;
 }
 p {
   padding: 0;
   margin: 0;
 }
`;
