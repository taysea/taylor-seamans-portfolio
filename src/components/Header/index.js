import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Header as GrommetHeader, Nav, Text } from "grommet";

const links = [
  { label: "UX", href: "/ux" },
  { label: "Editorial", href: "/editorial" },
  { label: "Art", href: "/art" },
  { label: "About", href: "/about" },
];

const NavLink = styled(Link)`
  color: ${(props) => props.theme.global.colors["text-strong"]};
  font-weight: normal;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <GrommetHeader
      justify="between"
      fill="horizontal"
      pad={{ vertical: "medium" }}
    >
      <NavLink to="/">
        <Text>Taylor Seamans</Text>
      </NavLink>
      <Nav direction="row">
        {links.map((link) => (
          <NavLink to={link.href}>
            <Text size="small">{link.label}</Text>
          </NavLink>
        ))}
      </Nav>
    </GrommetHeader>
  );
};

export default Header;
