module.exports = {
  siteMetadata: {
    title: "bekkerTest",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/db.json`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
};
