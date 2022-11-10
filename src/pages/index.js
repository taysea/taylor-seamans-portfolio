import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, Grid, Heading, Paragraph, Tag, Text } from "grommet";

const development = [
  "JavaScript",
  "React",
  "Next.js",
  "Gatsby",
  "GraphQL",
  "Grommet",
];

const design = [
  "Figma",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe InDesign",
];

const IndexPage = ({ data }) => {
  return (
    <>
      <Box width="large" pad={{ top: "large" }}>
        <Heading margin="none">Hello, my name is Taylor Seamans.</Heading>
      </Box>
      <Paragraph>
        I believe in creating accessible, intuitive, and pleasing digital
        experiences. I am experienced working cross-functionally— with UX
        research, design, and development— and enjoy the collaboration and
        creativity that this kind of work produces.
      </Paragraph>
      <Heading level={2}>Some things I build with</Heading>
      <Heading level={3}>Development</Heading>
      <Box direction="row" wrap>
        {development.map((item, index) => (
          <Tag
            key={index}
            value={item}
            margin={{ right: "small", bottom: "small" }}
          />
        ))}
      </Box>
      <Heading level={3}>Design</Heading>
      <Box direction="row" wrap>
        {design.map((item, index) => (
          <Tag
            key={index}
            value={item}
            margin={{ right: "small", bottom: "small" }}
          />
        ))}
      </Box>
      <Box pad={{ top: "medium" }}>
        <Heading level={2}>Select Projects</Heading>
      </Box>
      <Grid columns="medium" gap="large" pad={{ top: "medium" }}>
        {data.allContentfulUx.edges.map((datum, index) => {
          const image = getImage(datum.node.coverImage);

          return (
            <Link
              to={`ux/${datum.node.slug}`}
              style={{ textDecoration: "none" }}
            >
              <Box key={index}>
                <Box
                  height="medium"
                  margin={{ bottom: "small" }}
                  round="small"
                  overflow="hidden"
                >
                  <GatsbyImage
                    image={image}
                    alt={datum.description}
                    style={{ height: "100%" }}
                  />
                </Box>
                <Heading level={3} size="xsmall" margin="none">
                  {datum.node.title}
                </Heading>
                <Text color="text-weak" size="small">
                  {datum.node.category}
                </Text>
              </Box>
            </Link>
          );
        })}
      </Grid>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Taylor Seamans</title>;

export const query = graphql`
  {
    allContentfulUx {
      edges {
        node {
          coverImage {
            description
            file {
              url
            }
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
          category
          title
          slug
        }
      }
    }
  }
`;
