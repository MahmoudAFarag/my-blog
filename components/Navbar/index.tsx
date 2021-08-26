import { useState, useEffect } from 'react'
import Link from 'next/link'

import DarkIcon from './DarkIcon'
import LightIcon from './LightIcon'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.querySelector('body')?.classList.add('dark-mode')
      document.querySelectorAll('h1').forEach(tag => tag.classList?.add('white-text'))
    } else {
      document.querySelector('body')?.classList.remove('dark-mode')
      document.querySelectorAll('h1').forEach(tag => tag.classList?.remove('white-text'))
    }
  })

  const changeTheme = () => {
    localStorage.setItem('darkMode', `${!dark}`)
    setDark(dark => !dark)
  }

  return (
    <div className={styles.navbar}>
      {dark ? (
        <LightIcon style={styles.navbar__icon} onClick={changeTheme} />
      ) : (
        <DarkIcon style={styles.navbar__icon} onClick={changeTheme} />
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
