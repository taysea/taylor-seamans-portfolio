import React from "react"
import { Grommet, Main, Page, PageContent } from "grommet"
import { theme } from "../theme"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({ children, location }) => {
  let content = (
    <Page>
      <PageContent>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </PageContent>
    </Page>
  )

  return (
    <Grommet background="background-back" theme={theme} full="min">
      {content}
    </Grommet>
  )
}

export default Layout
