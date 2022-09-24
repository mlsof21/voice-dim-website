require("dotenv").config({
  path: ".env",
})
module.exports = {
  siteMetadata: {
    title: `Voice DIM`,
    description: `Interact with DIM using voice commands`,
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
        name: "Help",
        link: "/help",
      },
      {
        name: "Changelog",
        link: "/changelog",
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_TRACKING_ID, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Defaults to https://www.googletagmanager.com
        },
      },
    },
  ],
}
