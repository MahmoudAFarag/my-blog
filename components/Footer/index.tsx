import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaSpotify } from '@react-icons/all-files/fa/FaSpotify'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <FaTwitter className={styles.footer__container_twitter} />
        <h1>
          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/yalamishmohem'>
            Twitter
          </a>
        </h1>
      </div>
      <div className={styles.footer__container}>
        <FaGithub className={styles.footer__container_github} />
        <h1>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/MahmoudAshraf25/my-blog'
          >
            Github
          </a>
        </h1>
      </div>
      <div className={styles.footer__container}>
        <FaSpotify className={styles.footer__container_spotify} />
        <h1>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://open.spotify.com/user/o29ttxnodauochmjx5fwogiew?si=ee0d5674f7fb45a2'
          >
            Spotify
          </a>
        </h1>
      </div>
    </div>
  )
}

export default Footer
