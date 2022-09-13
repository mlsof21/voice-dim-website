require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    title: `Voice DIM`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `mlsof21`,
    siteUrl: `https://www.voicedim.com`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Download",
        link: "https://chrome.google.com/webstore/detail/voice-dim/ldfeegohcppbkbmiefdcjcbdmjikpead",
      },
      {
        name: "Changelogs",
        link: "/changelogs",
      },
      {
        name: "About",
        link: "/about",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
  ],
}
