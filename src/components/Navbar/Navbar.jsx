import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__logo} />
      <ul className={styles.navbar__items}>
        <li className={styles.navbar__item}>
          <a href="#vision">Our vision</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#experts">Our experts</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#services">Our services</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="cases">Our cases</a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#ABS">Api/bridges/SDK</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
