const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Aaron Kai Hubbard',
    description: 'A portfolio for Aaron Hubbard',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
  flags: {
    DEV_SSR: false,
  },
};
