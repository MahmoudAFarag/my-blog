import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { getBlogsSlug, getBlogData } from '../../lib/fetchPosts'
import { Blog } from '../../types/blog-types'

import BlogPost from '../../components/Featured/BlogPost'

const BlogPage: NextPage<{ blog: Blog }> = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{`Blog | ${blog.title}`}</title>
        <meta name='description' content={blog.excerpt} />
        <meta
          property='og:url'
          content={`https://justablog.vercel.app/blogs/${blog.slug}`}
        />
        <meta property='og:type' content='blog' />
        <meta property='og:title' content={`Blog | ${blog.title}`} />
        <meta property='og:description' content={blog.excerpt} />
        <meta property='og:image' content={blog.image} />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <BlogPost
        title={blog.title}
        content={blog.content}
        date={blog.date}
        image={blog.image}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogSlugs = getBlogsSlug()
  const slugs = blogSlugs.map((blog) => ({ params: { slug: blog } }))

  return {
    paths: slugs,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const blog = getBlogData(`${context.params?.slug}.md`)

  return {
    props: {
      blog,
    },
  }
}

export default BlogPage
