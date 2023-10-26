import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Grid, Heading, Text } from "grommet"

const UXPage = ({ data }) => {
  return (
    <>
      <Heading margin={{ top: "large" }}>UI/UX</Heading>
      <Grid columns="medium" gap="large" pad={{ top: "medium" }}>
        {data.allContentfulUx.edges.map((datum, index) => {
          const image = getImage(datum.node.coverImage)

          return (
            <Link to={datum.node.slug} style={{ textDecoration: "none" }}>
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
                <Heading level={2} size="22px" margin="none">
                  {datum.node.title}
                </Heading>
                <Text color="text-weak" size="small">
                  {datum.node.category}
                </Text>
              </Box>
            </Link>
          )
        })}
      </Grid>
    </>
  )
}

export default UXPage

export const Head = () => <title>UX | Taylor Seamans</title>

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
`
