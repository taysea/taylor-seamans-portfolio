import React, { useContext } from "react";
import { graphql, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Anchor, Box, Grid, Heading, ResponsiveContext, Text } from "grommet";
import { FormPreviousLink } from "grommet-icons";
import { options } from "../utils/options";

const MaterialDetailTemplate = ({ data }) => {
  const image = getImage(data.contentfulMaterial.coverImage);
  const feature1Image = getImage(data.contentfulMaterial.feature1);
  const feature2Image = getImage(data.contentfulMaterial.feature2);

  const breakpoint = useContext(ResponsiveContext);

  return (
    <>
      <Box pad={{ vertical: "large" }}>
        <Box width="large" gap="medium">
          <Link to="/materials" style={{ textDecoration: "none" }}>
            <Anchor
              icon={<FormPreviousLink />}
              label="Materials"
              color="text-strong"
            />
          </Link>
          <Heading margin="none">{data.contentfulMaterial.title}</Heading>
          <Box>
            {renderRichText(data.contentfulMaterial.description, options)}
          </Box>
        </Box>
      </Box>

      <Grid
        columns={breakpoint === "small" ? ["auto"] : ["flex", "flex"]}
        gap="large"
        pad={{ bottom: "large" }}
      >
        <Box height="600px">
          <GatsbyImage
            image={image}
            alt={data.contentfulMaterial.coverImage.description}
            style={{ height: "100%" }}
          />
        </Box>
        <Box>
          {renderRichText(data.contentfulMaterial.coverDetails, options)}
        </Box>
      </Grid>
      <Grid
        columns={breakpoint === "small" ? ["auto"] : ["auto", "auto"]}
        gap="large"
        pad={{ bottom: "large" }}
      >
        <Box gap="medium">
          <Box height="600px">
            <GatsbyImage
              image={feature1Image}
              alt={data.contentfulMaterial.feature1.description}
              style={{ height: "100%" }}
            />
          </Box>
          <Box>
            {renderRichText(data.contentfulMaterial.feature1Details, options)}
          </Box>
        </Box>
        <Box gap="medium">
          <Box height="600px">
            <GatsbyImage
              image={feature2Image}
              alt={data.contentfulMaterial.feature1.description}
              style={{ height: "100%" }}
            />
          </Box>
          <Box>
            {renderRichText(data.contentfulMaterial.feature2Details, options)}
          </Box>
        </Box>
      </Grid>
      {data.contentfulMaterial.title === 'Field support outdoor wear' ? <Text>Photo credit: Ethan DeLorenzo</Text> : undefined}
    </>
  );
};

export default MaterialDetailTemplate;

export const Head = () => <title>Materials | Taylor Seamans</title>;

export const query = graphql`
  query MaterialDetailQuery($slug: String!) {
    contentfulMaterial(slug: { eq: $slug }) {
      title
      description {
        raw
      }
      coverImage {
        description
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
      coverDetails {
        raw
      }
      feature1 {
        description
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
      feature1Details {
        raw
      }
      feature2 {
        description
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
      feature2Details {
        raw
      }
    }
  }
`;
