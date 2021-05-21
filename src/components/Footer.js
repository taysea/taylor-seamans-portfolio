import React from "react"
import { Button, Box, Footer, Text } from "grommet"
import { Github, Medium, Linkedin } from "grommet-icons"

const StyledFooter = () => {
  const year = new Date().getFullYear()

  return (
    <Footer justify="center" direction="column" pad={{ vertical: "medium" }}>
      <Box direction="row" gap="medium">
        <Button
          a11yTitle="Taylor's Github"
          href="https://github.com/taysea"
          target="_blank"
          rel="noopener"
        >
          <Github color="text-strong" />
        </Button>
        <Button
          a11yTitle="Taylor's LinkedIn"
          href="https://www.linkedin.com/in/taylor-seamans/"
          target="_blank"
          rel="noopener"
        >
          <Linkedin color="text-strong" />
        </Button>
        <Button
          a11yTitle="Taylor's Medium"
          href="https://medium.com/@taylorseamans"
          target="_blank"
          rel="noopener"
        >
          <Medium color="text-strong" />
        </Button>
      </Box>
      <Text size="small" color="text-strong">
        © {year} — Taylor Seamans
      </Text>
    </Footer>
  )
}

export { StyledFooter as Footer }
