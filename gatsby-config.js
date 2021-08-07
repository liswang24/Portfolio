module.exports = {
  siteMetadata: {
    author: "Lisa Wang",
    description: "Portfolio site for Lisa Wang",
    title: "Lisa's Portfolio",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/logos`,
        name: `logos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
  ],
};
