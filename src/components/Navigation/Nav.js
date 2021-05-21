import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Box, Text } from "grommet"
import { NavItems } from "."

const NavLink = styled(Link)`
  font-weight: bold;
  font-size: 0.8em;
  text-decoration: none;
  color: #111;
  &:hover {
    text-decoration: none;
  }
`

const NavButton = ({ item }) => {
  const [color, setColor] = useState("text")

  return (
    <Box
      onMouseOver={() => setColor("#8F37FE")}
      onFocus={() => {}}
      onMouseOut={() => setColor("text")}
      onBlur={() => {}}
    >
      <Box pad={{ horizontal: "small", vertical: "xsmall" }}>
        <Text size="small" weight="bold" color={color}>
          {item}
        </Text>
      </Box>
    </Box>
  )
}
export const Nav = () => {
  return (
    <Box direction="row" gap="small">
      <Box align="center" direction="row" gap="medium">
        {NavItems.map(
          item =>
            item !== "Cart" &&
            item !== "Magazine" && (
              <NavLink
                key={item}
                to={
                  item !== "About" && item !== "Shop"
                    ? `/categories/${item.toLowerCase()}`
                    : `/${item.toLowerCase()}`
                }
              >
                <NavButton item={item} />
              </NavLink>
            )
        )}
      </Box>
    </Box>
  )
}
