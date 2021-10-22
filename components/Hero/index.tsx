import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* the linter doesn't like like apostrophes */}
      {/* eslint-disable-next-line */}
      <h1 className={styles.hero__title}>Hey, I'm Mahmoud Ashraf</h1>
      <p className={styles.hero__description}>
        Pharmacist on paper, anything else by heart. This is my personal space where I express my
        thoughts as words. Feel free to take a look around.
      </p>
    </section>
  )
}

export default Hero
