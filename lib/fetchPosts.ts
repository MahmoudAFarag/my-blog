import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const blogsDirectory = path.join(process.cwd(), 'blogs')

export function getAllBlogs() {
  const allBlogFiles = fs.readdirSync(blogsDirectory)

  return allBlogFiles.map(blogFile => getBlogData(blogFile))
}

export function getBlogsSlug() {
  const allFeaturedBlogs = fs.readdirSync(blogsDirectory)

  return allFeaturedBlogs.map(blog => blog.replace(/\.[^/.]+$/, ''))
}

export function getBlogData(filename: string) {
  const filePath = path.join(blogsDirectory, filename)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const blogSlug = getBlogsSlug().find(
    blog => blog.toLowerCase() == filename.replace(/\.[^/.]+$/, '').toLowerCase()
  )

  return {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    image: data.image,
    slug: blogSlug,
    isFeatured: data.isFeatured,
    content,
  }
}

export function getFeaturedBlogs() {
  const allBlogs = getAllBlogs()

  return allBlogs.filter(blog => blog.isFeatured === true)
}
