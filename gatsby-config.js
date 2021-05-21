require("dotenv").config()
// const config = require("gatsby-plugin-config")

module.exports = {
  siteMetadata: {
    title: `Taylor Seamans Portfolio`,
    description: `A brief introduction to my work and how I view the world.`,
    author: `Taylor Seamans`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // plugins: [
        //   {
        //     resolve: `gatsby-remark-images-contentful`,
        //     options: {
        //       // It's important to specify the maxWidth (in pixels) of
        //       // the content container as this plugin uses this as the
        //       // base for generating different widths of each image.
        //       // maxWidth: 500,
        //       withWebp: true,
        //     },
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
