module.exports = {
  siteMetadata: {
    title: `Come to Salah`,
    description: `An introduction to Salah, the second pillar of Islam.`,
  },
  // pathPrefix: "/come-to-salah",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    // "gatsby-transformer-remark",
    // `gatsby-transformer-yaml`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
