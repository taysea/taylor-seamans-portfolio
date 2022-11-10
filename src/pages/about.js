import React, { useContext } from "react";
import {
  Anchor,
  Box,
  Grid,
  Heading,
  Image,
  Paragraph,
  ResponsiveContext,
} from "grommet";
import bio from "../images/me.jpg";

const links = [
  // { label: "Resume", href: "#" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/taylor-seamans/" },
  { label: "Github", href: "https://github.com/taysea" },
];

const AboutPage = () => {
  const breakpoint = useContext(ResponsiveContext);

  return (
    <>
      <Grid
        align="start"
        columns={breakpoint === "small" ? ["auto"] : ["auto", "medium"]}
        pad={{ top: "large" }}
        gap="xlarge"
      >
        <Box>
          <Heading margin="none">About</Heading>
          <Paragraph>
            I am a UI/UX engineer based in San Francisco, CA. I have spent the
            last 3 years building an open-source design system and component
            library for Hewlett Packard Enterprise, with a particular focus on
            accessible design and implementation.
          </Paragraph>
          <Paragraph>
            Outside of UX, my interests and experiences range from editorial
            design and ceramics to fMRI research. Some of my favorite
            experiences include interviewing artists across the globe, such as a
            French tattoo artist about how the body becomes a living
            documentation of her work. In the past, I've also been involved with
            neuroscience research, such as an fMRI study on how the brain
            creates mental objects out of sounds to localize where they’re
            coming from.
          </Paragraph>
          <Paragraph>
            I graduated in 2019 from the University of Southern California with
            a B.S. in Computational Neuroscience and minors in Communication
            Design and Web Applications & Technologies.
          </Paragraph>
          <Box gap="small" pad={{ top: "medium" }}>
            {links.map((link) => (
              <Anchor
                {...link}
                alignSelf="start"
                target="_blank"
                rel="noopener"
                color="text"
                weight={400}
                style={{ textDecoration: "underline" }}
              />
            ))}
          </Box>
        </Box>
        <Box>
          <Image src={bio} fit="cover" />
        </Box>
      </Grid>
    </>
  );
};

export default AboutPage;

export const Head = () => <title>About | Taylor Seamans</title>;
