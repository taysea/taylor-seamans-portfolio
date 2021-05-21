import React from "react"
import styled from "styled-components"
import { Text } from "grommet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PartialWidthSection } from "../layouts/PartialWidth"

const StyledMark = styled.mark`
  background-color: rgba(153, 235, 207, 0.4);
`
const IndexPage = () => {
  return (
    <Layout isNavPage isLanding>
      <SEO title="Home" />

      <PartialWidthSection
        width="large"
        gap="medium"
        justify="center"
        alignSelf="center"
        margin={{ horizontal: "auto", top: "large" }}
      >
        <Text size="5xl" role="img" a11yTitle="Waving Hand Emoji">
          &#x1F44B;
        </Text>

        <Text size="xxlarge" weight={700} style={{ lineHeight: "55px" }}>
          <StyledMark>
            I am a UI Developer based in San Francisco, CA. I am passionate
            about building performant, accessible, and inclusive user
            interfaces.
          </StyledMark>
        </Text>
        <Text size="large" color="#000">
          With a B.S. in Computational Neuroscience, I love to think about how
          people think then design things to fit. This portfolio is a brief
          introduction into how I look at the world.
        </Text>
      </PartialWidthSection>
    </Layout>
  )
}
export default IndexPage
