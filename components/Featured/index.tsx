import styles from './Featured.module.scss'
import { Blog } from '../../types/blog-types'
import FeaturedBlog from './FeaturedBlog'

interface Props {
  blogs: Blog[]
}

const Featured = ({ blogs }: Props) => {
  return (
    <div className={styles.featured}>
      <h1 className={styles.featured__header}>Featured Blogs</h1>
      {blogs.map(blog => (
        <FeaturedBlog key={blog.title} title={blog.title} excerpt={blog.excerpt} slug={blog.slug} />
      ))}
    </div>
  )
}

export default Featured
