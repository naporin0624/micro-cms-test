import React from "react";
import { GetServerSideProps } from "next";
import { getEntries } from "~/lib/apis";
import { Entries } from "~/types";
import styled from "styled-components";
import Head from "next/head";
import { Card } from "~/components/Card";
import Link from "next/link";
import Header from "~/components/Header";

type Props = { entries: Entries };

const Welcome: React.FC<Props> = props => {
  const { entries } = props;
  const { contents } = entries;

  return (
    <>
      <Head>
        <title>a</title>
      </Head>
      <Header />
      <main>
        <Container>
          {contents.map(({ image, body, title, id }) => (
            <Link href="/entries/[id]" as={`/entries/${id}`} key={id} prefetch>
              <a>
                <Card text={body} src={image.url} title={title} />
              </a>
            </Link>
          ))}
        </Container>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const entries = await getEntries();
  return { props: { entries } };
};

export default Welcome;

const Container = styled.div`
  display: flex;
  max-width: 1080px;
  margin: 48px auto 32px;
  padding: 0 16px;
`;
