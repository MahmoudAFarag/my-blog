import { useState, useEffect } from 'react'
import Link from 'next/link'

import DarkIcon from './DarkIcon'
import LightIcon from './LightIcon'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const [light, setLight] = useState(false)

  useEffect(() => {
    if (light) {
      document.querySelector('body')?.classList.add('light-mode')
      document.querySelectorAll('h1').forEach(tag => tag.classList?.add('white-text'))
    } else {
      document.querySelector('body')?.classList.remove('light-mode')
      document.querySelectorAll('h1').forEach(tag => tag.classList?.remove('white-text'))
    }
  })

  const changeTheme = () => {
    setLight(light => !light)
  }

  return (
    <div className={styles.navbar}>
      {light ? (
        <DarkIcon style={styles.navbar__icon} onClick={changeTheme} />
      ) : (
        <LightIcon style={styles.navbar__icon} onClick={changeTheme} />
      )}

      <div>
        <Link href='/'>
          <a className={styles.navbar__link}>Home</a>
        </Link>

        <Link href='/blogs'>
          <a className={styles.navbar__link}>All Blogs</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
