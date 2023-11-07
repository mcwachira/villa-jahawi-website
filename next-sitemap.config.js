module.exports = {
  siteUrl: "https://villajahawi.com",
  generateRobotsTxt: true,
  sitemapSize: 1000,
  exclude: ["/server-sitemap.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://villajahawi.com/server-sitemap.xml", // <==== Add here
    ],
  },
};
