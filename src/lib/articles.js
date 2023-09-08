import glob from 'fast-glob'
import path from 'path'

async function importArticle(articleFilename) {
  let { meta } = await import(`../pages/articles/${articleFilename}`)
  const slug = articleFilename.replace(/(\/index)?\.mdx$/, '')
  console.log(slug)

  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(
    articleFilenames.map((articleFilename) => importArticle(articleFilename))
  )

  return articles.sort((a1, a2) => new Date(a2.date) - new Date(a1.date))
}

export async function getAllCategories() {
  let articles = await getAllArticles()
  let repeatingCategories = articles.map((article) => article.category)

  const categoryCount = new Map()

  repeatingCategories.forEach((category) => {
    if (categoryCount.has(category)) {
      categoryCount.set(category, categoryCount.get(category) + 1)
    } else {
      categoryCount.set(category, 1) // Map to capture Count of elements
    }
  })

  const uniqueCategories = [...new Set(repeatingCategories)]

  const categories = uniqueCategories.sort((category1, category2) => {
    let freq1 = categoryCount.get(category1)
    let freq2 = categoryCount.get(category2)

    return freq2 - freq1
  })

  return categories
}

export async function getArticlesInCategory(category) {
  const articles = await getAllArticles()
  return articles.filter((article) => {
    return article.category === category
  })
}
