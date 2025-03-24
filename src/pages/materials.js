import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Heading, Grid, PageHeader, ResponsiveContext } from "grommet"

const Materials = ({ data }) => {
  const size = useContext(ResponsiveContext);
  
  return (
    <>
      <PageHeader
        title="Materials"
        subtitle={`Projects focused on sustainable materials design, living, and the connection between material choice and functional, context-driven design.`}
      />
      <Grid columns={size === 'small' ? ['flex'] : ['flex', 'flex', 'flex', 'flex']} gap="medium" pad={{ top: "medium" }}>
        {data.allContentfulMaterial.edges.sort((a,b) => {
          if (a.node.title > b.node.title) return -1
          if (a.node.title < b.node.title) return 1
          return 0
        }).map(datum => {
          const image = getImage(datum.node.coverImage)
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
          )
        })}
      </Grid>
    </>
  )
}

export default Materials

export const Head = () => <title>Materials | Taylor Seamans</title>

export const query = graphql`
  {
    allContentfulMaterial {
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
`
