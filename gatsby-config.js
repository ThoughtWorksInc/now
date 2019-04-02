module.exports = {
  siteMetadata: {
    title: `ThoughtWorks - NOW`,
    description: `ThoughtWorks presents: Network of women!`,
    author: `@thoughtworks_de`
  },
  plugins: [
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
