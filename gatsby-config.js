module.exports = {
  siteMetadata: {
    title: `Vladimir's portfolio`,
    description: ``,
    author: `Vladimir Antsupov`,
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Vladimir's portfolio`,
    //     short_name: `portfolio`,
    //     start_url: `/`,
    //     background_color: `#392a2c`,
    //     theme_color: `#392a2c`,
    //     display: `minimal-ui`,
    //     icon: `src/images/icon.png`, // This path is relative to the root of the site.
    //   },
    // },
  ],
};
