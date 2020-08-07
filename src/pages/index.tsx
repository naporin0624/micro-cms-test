import React from "react";
import { GetServerSideProps } from "next";

type Props = { b: number };

const Welcome: React.FC<Props> = props => {
  return <div>{props.b}</div>;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: { b: 1 } };
};

export default Welcome;
