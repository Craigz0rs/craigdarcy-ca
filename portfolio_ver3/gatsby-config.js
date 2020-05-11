require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Craig D'Arcy`,
    description: `JAMstack and WordPress development portfolio featuring serverless websites built with React Gatsby, Vue Gridsome using WordPress and Contentful as headless CMS.`,
    author: `Craig D'Arcy`,
    image: `src/images/site-image.jpg`,
    siteUrl: `https://craigdarcy.ca`
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
        name: `JAMstack & WordPress Development Portfolio | Craig D'Arcy`,
        short_name: `Craig D'Arcy`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `rgb(2, 66, 153)`,
        display: `minimal-ui`,
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
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
  ],
}
