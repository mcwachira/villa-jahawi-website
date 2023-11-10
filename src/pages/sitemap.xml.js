// pages/sitemap.xml.js

import { getAllArticles } from "../lib/articles";

const URL = "https://www.villajahawi.com";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
       <loc>${URL}/accommodation</loc>
     </url>
     <url>
     <loc>${URL}/amenities</loc>
   </url>
      <url>
       <loc>${URL}/articles</loc>
     </url>
     <url>
     <loc>${URL}/contact</loc>
   </url>
     ${articles
       .map(({ id }) => {
         return `
           <url>
               <loc>${`${URL}/articles/${id}`}</loc>
           </url>
         `;
       })
       .join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  const articles = getAllArticles();

  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
