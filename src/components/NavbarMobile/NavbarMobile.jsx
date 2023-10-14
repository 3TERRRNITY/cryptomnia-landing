import styles from "./NavbarMobile.module.scss";

const NavbarMobile = ({ closeMobileNav }) => {
  const handleLinkClick = () => {
    closeMobileNav();
  };
  return (
    <div className={styles.navbarMobile}>
      <a href="/" onClick={handleLinkClick}>
        <div className={styles.navbarMobile__logo} />
      </a>
      <ul className={styles.navbarMobile__items}>
        <li className={styles.navbar__item}>
          <a href="#vision" onClick={handleLinkClick}>
            Our vision
          </a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#experts" onClick={handleLinkClick}>
            Our experts
          </a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#services" onClick={handleLinkClick}>
            Our services
          </a>
        </li>
        <li className={styles.navbar__item}>
          <a href="#cases" onClick={handleLinkClick}>
            Our cases
          </a>
        </li>
        <li className={styles.navbar__item}>
          <a href={`/API-Bridges`} onClick={handleLinkClick}>
            Api/bridges/SDK
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
