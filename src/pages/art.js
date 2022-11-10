import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Heading, Grid } from "grommet";

const ArtPage = ({ data }) => {
  return (
    <>
      <Heading margin={{ top: "large", bottom: "none" }}>Art</Heading>
      <Grid columns="small" gap="medium" pad={{ top: "medium" }}>
        {data.allContentfulArt.edges.map((datum) => {
          const image = getImage(datum.node.image);
          return <GatsbyImage image={image} alt={datum.description} />;
        })}
      </Grid>
    </>
  );
};

export default ArtPage;

export const Head = () => <title>Art | Taylor Seamans</title>;

export const query = graphql`
  {
    allContentfulArt {
      edges {
        node {
          id
          image {
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
