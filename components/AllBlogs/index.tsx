import Link from 'next/link'
import { Blog } from '../../types/blog-types'

import styles from './AllBlogs.module.scss'
import sharedStyles from '../Featured/Featured.module.scss'

const AllBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className={styles.allBlogs}>
      <h1 className={styles.allBlogs__header}>All Blogs</h1>
      {blogs.map((blog) => (
        <Link href={`/blogs/${blog.slug}`} key={blog.slug} passHref>
          <div className={sharedStyles.featured__blog}>
            <h1 className={sharedStyles.featured__blog_title}>{blog.title}</h1>
            <p className={sharedStyles.featured__blog_excerpt}>
              {blog.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AllBlogs
