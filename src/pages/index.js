import React from "react"
import { graphql, Link } from "gatsby"
import { Anchor, Paragraph, Page, PageContent, PageHeader } from "grommet"

const IndexPage = ({ data }) => {
  return (
    <Page kind="narrow">
      <PageContent>
        <PageHeader
          title="Hello, my name is Taylor Seamans."
          subtitle={
            <Anchor
              label="@taysea"
              href="https://github.com/taysea"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        />
        <Paragraph>
          Currently, I am building an{" "}
          <Anchor
            label="open-source design system"
            href="https://design-system.hpe.design/"
            target="_blank"
            rel="noopener noreferrer"
          />{" "}
          and component library for Hewlett Packard Enterprise.
        </Paragraph>
        {/* <Paragraph>
          In addition to my love for design systems, I am a software engineer
          that is curious about how to improve and maximize developer
          experience.
        </Paragraph> */}
        <Paragraph>
          Over the past few years, I’ve become increasingly interested in <Link to="/materials"><Anchor label="sustainable materials design" /></Link>, human-scale urbanism, and natural building.
        </Paragraph>
        <Paragraph>
      I have hands-on experience in sustainable material exploration through <Link to="/materials"><Anchor label="diverse projects and workshops" /></Link>.
        </Paragraph>
        <Paragraph>
          Before my time as a software engineer, I was completing my degree and
          research in Computational Neuroscience and Communication Design.
        </Paragraph>
        <Paragraph margin={{ bottom: "none" }}>
          Outside of work, you can find me:
        </Paragraph>
        <ul style={{ margin: "none", paddingInlineStart: "none" }}>
          <li>running</li>
          <li>reading about urban planning and natural building</li>
          <li>sewing clothes</li>
          <li>going for a long walk</li>
          <li>trying to up my cooking skills</li>
        </ul>
      </PageContent>
    </Page>
  )
}

export default IndexPage

export const Head = () => <title>Taylor Seamans</title>

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
