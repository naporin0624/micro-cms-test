import React from "react";
import styled from "styled-components";
import { Markup } from "interweave";
import { transform } from "~/lib/transform";

type Props = {
  src: string;
  text: string;
  title: string;
};

export const Card: React.FC<Props> = ({ src, title, text }) => {
  return (
    <Container>
      <ThumbnailContainer>
        <Thumbnail src={src} />
        <Title>{title}</Title>
      </ThumbnailContainer>
      <Body>
        <Markup content={text} noWrap transform={transform} />
        <Share></Share>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
`;

const ThumbnailContainer = styled.div`
  position: relative;
`;
const Thumbnail = styled.img`
  width: 100%;
  object-fit: cover;
  height: 250px;
  object-position: top;
`;
const Title = styled.h2`
  position: absolute;
  color: #333333;
  right: 0;
  bottom: 8px;
  font-size: 24px;
  font-weight: 600;
`;

const Body = styled.div`
  box-sizing: border-box;
  padding: 10px 16px;
  overflow-y: hidden;
  height: 100px;
  position: relative;
  &:after {
    content: "";
    width: 100%;
    height: 32px;
    position: absolute;
    bottom: px;
    left: 0;
    opacity: 0.6;
    background: white;
  }
`;
const Share = styled.div`
  height: 50px;
  width: 100%;
`;
