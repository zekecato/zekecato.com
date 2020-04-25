module.exports = {
  siteName: "Zeke Cato Enterprise",
  siteDescription: "Zeke Cato described as a professional and business entity.",

  templates: {},

  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "https://admin.zekecato.com", //process.env.WORDPRESS_URL, // required
        typeName: "WordPress", // GraphQL schema name (Optional)
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './some/file/js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
  ],
};
