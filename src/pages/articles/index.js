import Head from 'next/head'


import { BlogHero } from '@/components/BlogHero'
import { Articles } from '@/components/Articles'


import { getAllArticles, getAllCategories } from '@/lib/articles'
import Navbar from '@/components/Header/Navbar'
import Footer from '@/components/Footer'

export default function ArticlesIndex({ articles, categories }) {
  return (
    <>
      <Head>
        <title>Blog - Jane Doe</title>
        <meta
          name="description"
          content="Explore a diverse range of blog posts covering web development, design, content creation, business, programming tutorials, and more."
        />
      </Head>
      <Navbar />
      <BlogHero />
      <Articles articles={articles} categories={categories} />
      <Footer newsletter={false} />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: await getAllArticles(),
      categories: await getAllCategories(),
    },
  }
}
