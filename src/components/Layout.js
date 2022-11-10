import React from "react";
import { Box, Grommet, Image, Main, Page, PageContent, Stack } from "grommet";
import { theme } from "../theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import gradient2 from "../images/feathered-gradient.svg";

const Layout = ({ children, location }) => {
  let content = (
    <Page>
      <PageContent>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </PageContent>
    </Page>
  );

  if (location.pathname === "/")
    content = (
      <Stack guidingChild="last">
        <Box align="end" overflow="hidden">
          <Image
            src={gradient2}
            style={{ width: "40%", marginRight: "-50px" }}
          />
        </Box>
        {content}
      </Stack>
    );

  return (
    <Grommet background="background-back" theme={theme} full="min">
      {content}
    </Grommet>
  );
};

export default Layout;
