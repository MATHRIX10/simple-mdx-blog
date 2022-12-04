/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve : `gatsby-source-filesystem`,
      options :{
        name : `posts`,
        path : `${__driname/src/posts}`
      },
    },

    {
      resolve : `gatsby-source-filesystem`,
      options :{
        name : `images`,
        path : `${__driname/src/images}`
      },
    },
    {
      resolve : `gatsby-source-filesystem`,
      options :{
        name : `pages`,
        path : `${__driname/src/pages}`
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions : [ `.md`,`.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
             maxWidth : 1200,
             
            },
          },
        ],
      },
    },


  ],
}
