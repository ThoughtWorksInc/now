module.exports = {
  siteMetadata: {
    title: `N.O.W. Germany`,
    subTitle: `09 May 2019`,
    description: `ThoughtWorks presents: Network of women!`,
    author: `@thoughtworks_de`
  },
  pathPrefix: "/now",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    }
  ]
};
