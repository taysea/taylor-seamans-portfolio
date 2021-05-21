import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Box, Header, ResponsiveContext, Text } from "grommet"
import { MobileNav, Nav } from "."

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const StyledText = styled(Text)`
  letter-spacing: 0.3rem;
`

const Logo = () => (
  <StyledLink to="/">
    <Box>
      <StyledText weight="bold" size="large">
        TAYLOR SEAMANS
      </StyledText>
    </Box>
  </StyledLink>
)

export const NavBar = ({ isLanding, ...rest }) => {
  const size = useContext(ResponsiveContext)
  return (
    <Box {...rest}>
      <Header pad="medium" width="xxlarge" alignSelf="center">
        {size !== "small" ? (
          <>
            <Logo />
            <Box direction="row" gap="small">
              <Nav />
            </Box>
          </>
        ) : (
          <>
            <Logo />
            <MobileNav />
          </>
        )}
      </Header>
    </Box>
  )
}
