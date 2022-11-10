import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, Heading, Grid } from "grommet";

const Editorial = ({ data }) => {
  return (
    <>
      <Heading margin={{ top: "large" }}>Editorial</Heading>
      <Grid columns="medium" gap="medium" pad={{ top: "medium" }}>
        {data.allContentfulEditorial.edges.map((datum) => {
          const image = getImage(datum.node.coverImage);
          return (
            <Link to={datum.node.slug} style={{ textDecoration: "none" }}>
              <Box gap="small">
                <Box round="small" overflow="hidden">
                  <GatsbyImage image={image} alt={datum.description} />
                </Box>
                <Heading level={2} margin="none" size="22px">
                  {datum.node.title}
                </Heading>
              </Box>
            </Link>
          );
        })}
      </Grid>
    </>
  );
};

export default Editorial;

export const Head = () => <title>Editorial | Taylor Seamans</title>;

export const query = graphql`
  {
    allContentfulEditorial {
      edges {
        node {
          id
          title
          slug
          coverImage {
            description
            file {
              url
            }
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;
