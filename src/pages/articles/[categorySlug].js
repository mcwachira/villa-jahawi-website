import Head from 'next/head'

import { Header } from '@/components/Header'
import { BlogHero } from '@/components/BlogHero'
import { Articles } from '@/components/Articles'
import { Footer } from '@/components/Footer'

import { getArticlesInCategory, getAllCategories } from '@/lib/articles'

export default function ArticlesIndex({ articles, categories, category }) {
  return (
    <>
      <Head>
        <title>Blog - {category} - Jane Doe</title>
        <meta
          name="description"
          content="Explore a diverse range of blog posts covering web development, design, content creation, business, programming tutorials, and more."
        />
      </Head>
      <Header />
      <BlogHero />
      <Articles articles={articles} categories={categories} />
      <Footer newsletter={false} />
    </>
  )
}

export async function getStaticPaths() {
  const categories = await getAllCategories()
  return {
    paths: categories.map((category) => ({
      params: { categorySlug: category.replace(/ /g, '-').toLowerCase() },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params: { categorySlug } }) {
  const category = categorySlug
    .replace(/-/g, ' ')
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ')

  return {
    props: {
      articles: await getArticlesInCategory(category),
      categories: await getAllCategories(),
      category,
    },
  }
}
