import React, { useContext } from "react";
import { graphql, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Anchor, Box, Grid, Heading, ResponsiveContext, Text } from "grommet";
import { FormPreviousLink } from "grommet-icons";
import { options } from "../utils/options";

const UXDetailTemplate = ({ data }) => {
  const image = getImage(data.contentfulUx.coverImage);

  const breakpoint = useContext(ResponsiveContext);
  return (
    <>
      <Grid
        columns={breakpoint === "small" ? ["auto"] : ["flex", "flex"]}
        pad={{ vertical: "large" }}
        gap="large"
      >
        <Box>
          <Box gap="medium">
            <Link to="/ux" style={{ textDecoration: "none" }}>
              <Anchor
                icon={<FormPreviousLink />}
                label="UX"
                color="text-strong"
              />
            </Link>
            <Heading margin="none">{data.contentfulUx.title}</Heading>
          </Box>
          <Box pad={{ top: "small", bottom: "medium" }}>
            <Text size="small">Role</Text>
            <Text>{data.contentfulUx.role}</Text>
          </Box>
          <Text aria-hidden="true">------</Text>
          {renderRichText(data.contentfulUx.description, options)}
        </Box>
        <Box
          height={{ max: "600px" }}
          pad={{ top: "large" }}
          round="xsmall"
          overflow="hidden"
        >
          <GatsbyImage
            image={image}
            alt={data.contentfulUx.coverImage.description}
            style={{ height: "100%" }}
          />
        </Box>
      </Grid>
      <Box>{renderRichText(data.contentfulUx.body, options)}</Box>
    </>
  );
};

export default UXDetailTemplate;

export const Head = () => <title>UX | Taylor Seamans</title>;

export const query = graphql`
  query uxDetailQuery($slug: String!) {
    contentfulUx(slug: { eq: $slug }) {
      title
      role
      coverImage {
        description
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
      description {
        raw
      }
      body {
        raw
      }
      category
      role
      slug
    }
  }
`;
