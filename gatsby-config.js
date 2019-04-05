const dotenv = require('dotenv');
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
  });
}

module.exports = {
  siteMetadata: {
    title: `React For Cats`,
    author: `Anan Daraghmeh`,
    description: `Blog about web development, mainly react.`,
    siteUrl: `https://reactforcats.netlify.com`,
    social: {
      twitter: `AnanDaraghmeh`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qmu562vgdh34`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              wrapperStyle: `margin-bottom: 1rem`
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem`
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true
            }
          },
          `gatsby-remark-external-links`
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-135936892-2`
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT
      }
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`, `tags`],
        resolvers: {
          ContentfulPost: {
            title: node => node.title,
            tags: node => node.tags,
            slug: node => node.slug
          }
        }
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `React For Cats`,
        short_name: `RFC`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#de751f`,
        display: `standalone`,
        icon: `static/favicon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#613b1f`,
        showSpinner: false
      }
    },
    `gatsby-plugin-netlify`
  ]
};
