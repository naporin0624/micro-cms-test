import React from "react";
import styled from "styled-components";
import fetch from "node-fetch";

import SyntaxHighlighter from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Markup, TransformCallback } from "interweave";
import Header from "~/components/Header";

import { GetServerSideProps } from "next";
import { Entry } from "~/types";

type Props = { entry: Entry | null; className?: string };

const transform: TransformCallback = (node, children, config) => {
  if (node.tagName === "CODE") {
    return (
      <SyntaxHighlighter language="tsx" style={okaidia}>
        {children}
      </SyntaxHighlighter>
    );
  }

  if (node.tagName === "IMG") {
    return <img src={node.getAttributeNode("src").nodeValue} width="80%" />;
  }
};

const EntryPage: React.FC<Props> = ({ entry, className }) => {
  return (
    <Container className={className}>
      <Header />
      <Main>
        <MainSection>
          <Markup content={entry?.body} noWrap transform={transform} />
        </MainSection>
      </Main>
      <Footer></Footer>
    </Container>
  );
};

const Footer = styled.footer`
  height: 128px;
  width: 100%;
`;

const Container = styled.div`
  min-height: calc(100vh - 152px);
  box-sizing: border-box;
`;

const Main = styled.main`
  margin-top: 24px;
`;
const MainSection = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  background: #333333;
  color: white;
  padding: 24px 16px;
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  box-sizing: border-box;
`;

type Params = {
  _id: string;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async context => {
  const id: string = context.params["_id"];
  try {
    const headers = { "X-API-KEY": "3fdae01b-781b-4e04-ab86-432dc5790914" };
    const response = await fetch(`https://napochaan.microcms.io/api/v1/entries/${id}`, { headers });
    const entry: Entry = await response.json();
    return { props: { entry } };
  } catch (e) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
  }
};

export default EntryPage;
