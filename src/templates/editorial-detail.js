import React, { useContext } from "react";
import { graphql, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Anchor, Box, Grid, Heading, ResponsiveContext } from "grommet";
import { FormPreviousLink } from "grommet-icons";
import { options } from "../utils/options";

const EditorialDetailTemplate = ({ data }) => {
  const image = getImage(data.contentfulEditorial.coverImage);
  const feature1Image = getImage(data.contentfulEditorial.feature1);
  const feature2Image = getImage(data.contentfulEditorial.feature2);

  const breakpoint = useContext(ResponsiveContext);

  return (
    <>
      <Box pad={{ vertical: "large" }}>
        <Box width="large" gap="medium">
          <Link to="/editorial" style={{ textDecoration: "none" }}>
            <Anchor
              icon={<FormPreviousLink />}
              label="Editorial"
              color="text-strong"
            />
          </Link>
          <Heading margin="none">{data.contentfulEditorial.title}</Heading>
          <Box>
            {renderRichText(data.contentfulEditorial.description, options)}
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
            alt={data.contentfulEditorial.coverImage.description}
            style={{ height: "100%" }}
          />
        </Box>
        <Box>
          {renderRichText(data.contentfulEditorial.coverDetails, options)}
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
              alt={data.contentfulEditorial.feature1.description}
              style={{ height: "100%" }}
            />
          </Box>
          <Box>
            {renderRichText(data.contentfulEditorial.feature1Details, options)}
          </Box>
        </Box>
        <Box gap="medium">
          <Box height="600px">
            <GatsbyImage
              image={feature2Image}
              alt={data.contentfulEditorial.feature1.description}
              style={{ height: "100%" }}
            />
          </Box>
          <Box>
            {renderRichText(data.contentfulEditorial.feature2Details, options)}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default EditorialDetailTemplate;

export const Head = () => <title>Editorial | Taylor Seamans</title>;

export const query = graphql`
  query editorialDetailQuery($slug: String!) {
    contentfulEditorial(slug: { eq: $slug }) {
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
