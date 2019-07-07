module.exports = {
  siteMetadata: {
    title: `Come to Salah`,
    description: `An introduction to Salah, the second pillar of Islam.`,
  },
  // https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/
  // pathPrefix: "/come-to-salah",
  plugins: [
    {
      resolve: "gatsby-transformer-json",
      options: {
        pedantic: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Come To Salaat`,
        short_name: `Come To Salaat`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
