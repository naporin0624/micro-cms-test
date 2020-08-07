import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();

    const page = await renderPage(App => props => sheet.collectStyles(<App {...props} />));

    const styles = sheet.getStyleElement();

    return { ...page, styles };
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          {this.props.styles}
          <meta property="og:url" content="https://blog.napochaan.me" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="ブログ" />
          <meta property="og:site_name" content="ブログ" />
          <meta property="og:description" content="@naporin24690のブログです．" />
          <meta property="og:image" content="/static/main.png" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@naporin24690" />
          <meta name="twitter:creator" content="naporiady" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
