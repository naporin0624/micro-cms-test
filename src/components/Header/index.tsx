import React from "react";
import styled from "styled-components";
import Link from "next/link";

type Props = {
  className?: string;
};

const Header: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <Link href="/">
        <h1>Napochaan</h1>
      </Link>
    </Container>
  );
};

const Container = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #333333;
  h1 {
    color: #333333;
    font-size: 24px;
    font-weight: 600;
  }
`;

export default Header;
