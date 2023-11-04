import Head from "next/head";
import { AnimatePresence, motion } from 'framer-motion'

import { BlogHero } from "../../components/BlogHero";
import { Articles } from "../../components/Articles";

import { getAllArticles, getAllCategories } from "../../lib/articles";

export default function ArticlesIndex({ articles, categories }) {
  return (
    <>
        <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Head>
        <title>Latest Articles & News </title>
        <meta
          name="description"
          content="Explore a diverse range of blog posts covering web development, design, content creation, business, programming tutorials, and more."
        />
      </Head>

      <BlogHero />
      <Articles articles={articles} categories={categories} />

      </motion.div>
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
