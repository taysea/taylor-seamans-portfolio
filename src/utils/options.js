import React from "react";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Anchor, Heading, Paragraph } from "grommet";

export const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return <Anchor href={uri} label={children} color="text-strong" />;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <Heading level={2} margin={{ top: "medium", bottom: "none" }}>
          {children}
        </Heading>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      );
    },
  },
};
