/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const siteMetadata = require("./src/config/siteMetadata")

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto Condensed']
        }
      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyACWyn8avp3DOD9odhv9xmIMvEEgUkLvq8",
          authDomain: "us-dev-49149.firebaseapp.com",
          databaseURL: "https://us-dev-49149.firebaseio.com",
          projectId: "us-dev-49149",
          storageBucket: "us-dev-49149.appspot.com",
          messagingSenderId: "221716460761",
          appId: "1:221716460761:web:c004745e4ea9b87087fac8",
          measurementId: "G-0HG9HR9T4X",
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "4US DEV",
        short_name: "4US DEV",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#6200EE",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to 'anonymous'
        crossOrigin: 'use-credentials',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
}
