import React from "react";
import { Anchor, Footer as GrommetFooter } from "grommet";
import { Github, Linkedin } from "grommet-icons";

const Footer = () => {
  return (
    <GrommetFooter justify="center" gap="none" pad={{ vertical: "small" }}>
      <Anchor
        icon={<Linkedin />}
        color="text-strong"
        href="https://www.linkedin.com/in/taylor-seamans/"
        target="_blank"
        rel="noopener noreferrer"
      />
      <Anchor
        icon={<Github />}
        color="text-strong"
        href="https://github.com/taysea"
        target="_blank"
        rel="noopener noreferrer"
      />
    </GrommetFooter>
  );
};

export default Footer;
