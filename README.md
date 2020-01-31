# Zekecato.com based on WordPress starter for Gridsome

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gridsome/gridsome-starter-wordpress)


## Guide

Add your WordPress URL to the plugin options.

```js
// gridsome.config.js

module.exports = {
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'YOUR_WEBSITE_URL', // required
        typeName: 'WordPress', // GraphQL schema name
      }
    }
  ],
  // Setup template routes for any WordPress collection
  templates: {
    WordPressPost: '/:year/:month/:day/:slug',
    WordPressTag: '/tag/:slug'
  },
}

```

See all [options](https://gridsome.org/plugins/@gridsome/source-wordpress).

## Where's my index.vue?

Currently the home path is configured in gridsome.config.js to point to the about page. I am opting to manage all pages and page content through the Wordpress CMS unless there is real need for customization beyond the default layout.


