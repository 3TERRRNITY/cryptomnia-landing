import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseMobileNav = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
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
        <div className={styles.navbar__mobile} onClick={handleOpen}>
          <img
            className={styles.navbar__mobile__icon}
            src="/assets/icons/menu.svg"
          />
        </div>
      </div>
      {isOpen && <NavbarMobile closeMobileNav={handleCloseMobileNav} />}
    </>
  );
};

export default Navbar;
