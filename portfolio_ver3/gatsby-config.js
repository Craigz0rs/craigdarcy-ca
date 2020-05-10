module.exports = {
  siteMetadata: {
    title: `Craig D'Arcy`,
    description: `JAMstack and WordPress development portfolio featuring serverless websites built with React Gatsby, Vue Gridsome using WordPress and Contentful as headless CMS.`,
    author: `Craig D'Arcy`,
    image: `src/images/site-image.jpg`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
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
        spaceId: `2xd1nqmil00b`,
        accessToken: 'ctx6y1G4l7FD7X9UqqfGA-PiJAe2RSZDX7utSzxKZeQ',
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
