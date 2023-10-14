import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="/">
        <div className={styles.footer__logo} />
      </a>

      <ul className={styles.footer__items}>
        <li className={styles.footer__item}>
          <a href="#vision">Our vision</a>
        </li>
        <li className={styles.footer__item}>
          <a href="#experts">Our experts</a>
        </li>
        <li className={styles.footer__item}>
          <a href="#services">Our services</a>
        </li>
        <li className={styles.footer__item}>
          <a href="#cases">Our cases</a>
        </li>
        <li className={styles.footer__item}>
          <a href={`/API-Bridges`}>Api/bridges/SDK</a>
        </li>
      </ul>
      <div className={styles.footer__copyrights}>
        <a href="https://cryptomnia.io/#">Cryptomnia</a>® all rights reserved.{" "}
      </div>
    </div>
  );
};

export default Footer;
