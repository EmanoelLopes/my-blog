const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Emanoel Lopes`,
    author: {
      name: `Emanoel Lopes`,
      summary: `Engenheiro de Software com foco em desenvolvimento Front-End, de São Paulo, Brasil.`,
    },
    description: `My personal blog made with Gatsby, React and Graphql`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    navLinks: {
      about: `/about`,
      blog: `/blog`,
      contact: `/contact`,
    },
    social: {
      twitter: `https://twitter.com/mallander`,
      linkedin: `https://www.linkedin.com/in/emanoel-lopes-64100839/`,
      github: `https://github.com/EmanoelLopes`,
      codepen: `https://codepen.io/emanoellopes`,
      devto: `https://dev.to/emanoellopes`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        templates: path.join(__dirname, 'src/templates'),
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emanoel Lopes`,
        short_name: `Emanoel Lopes`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1e90ff`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
