import React from "react";
import { TransformCallback } from "interweave";
import SyntaxHighlighter from "react-syntax-highlighter";
import { googlecode } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const transform: TransformCallback = (node, children, config) => {
  if (node.tagName === "CODE") {
    return (
      <SyntaxHighlighter language="javascript" style={googlecode}>
        {children}
      </SyntaxHighlighter>
    );
  }

  if (node.tagName === "IMG") {
    return <img src={node.getAttributeNode("src").nodeValue} width="80%" />;
  }
};
