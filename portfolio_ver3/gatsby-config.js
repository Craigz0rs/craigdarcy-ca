require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Craig D'Arcy`,
    description: `My web development portfolio featuring WordPress and serverless & headless CMS JAMstack websites built with React Gatsby, and Vue Gridsome.`,
    author: `Craig D'Arcy`,
    image: `src/images/site-image.jpg`,
    siteUrl: `https://craigdarcy.ca`,
    theme: `rgb(2, 66, 153)`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Craig D'Arcy | JAMstack & WordPress Developer and Designer`,
        short_name: `Craig D'Arcy`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `rgb(2, 66, 153)`,
        display: `browser`,
        icon: `src/images/favicon.svg`,
      },
    },
    'gatsby-plugin-sass',    
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    `gatsby-transformer-inline-svg`,
  ],
}
