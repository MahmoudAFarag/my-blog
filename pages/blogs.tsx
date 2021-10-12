import type { NextPage, GetStaticProps } from 'next'
import AllBlogs from '../components/AllBlogs'
import { Blog } from '../types/blog-types'
import { getAllBlogs } from '../lib/fetchPosts'

interface Props {
  blogs: Blog[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allBlogs = getAllBlogs()

  return {
    props: {
      blogs: allBlogs,
    },
  }
}

const AllBlogsPage: NextPage<Props> = ({ blogs }) => {
  return (
    <div>
      <AllBlogs blogs={blogs} />
    </div>
  )
}

export default AllBlogsPage
