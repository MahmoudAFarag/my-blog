import Link from 'next/link'
import styles from './Featured.module.scss'

interface Props {
  title: string
  excerpt: string
  slug: string
}

const FeaturedBlog = ({ title, excerpt, slug }: Props) => {
  return (
    <Link href={`/blogs/${slug}`} passHref>
      <div className={styles.featured__blog}>
        <h1 className={styles.featured__blog_title}>{title}</h1>
        <p className={styles.featured__blog_excerpt}>{excerpt}</p>
      </div>
    </Link>
  )
}

export default FeaturedBlog
