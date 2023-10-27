import Head from "next/head";

import { BlogHero } from "../../components/BlogHero";
import { Articles } from "../../components/Articles";

import { getAllArticles, getAllCategories } from "../../lib/articles";

export default function ArticlesIndex({ articles, categories }) {
  return (
    <>
      <Head>
        <title>Latest Articles & News </title>
        <meta
          name="description"
          content="Explore a diverse range of blog posts covering web development, design, content creation, business, programming tutorials, and more."
        />
      </Head>

      <BlogHero />
      <Articles articles={articles} categories={categories} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: await getAllArticles(),
      categories: await getAllCategories(),
    },
  };
}
