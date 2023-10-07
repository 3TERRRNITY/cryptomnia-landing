import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__background} />
      <div className={styles.hero__text}>
        <div className={styles.hero__dots} />
        <div className={styles.hero__title}>
          Cryptomnia <br /> International{" "}
          <span className={styles.hero__highlight}>web 3.5</span> <br />{" "}
          development company
        </div>
      </div>
      <img
        className={styles.hero__image}
        src="../../../public/assets/hero-img.png"
        alt="hero image"
      />
    </div>
  );
};

export default Hero;
