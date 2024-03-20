import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(window.localStorage.getItem('text'));

  const toggleTrue = () => {
    setIsActive(true);
  };

  const setLocalStorage = (value) => {
    try {
      setIsActive(value);
      window.localStorage.setItem('text', value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className={`${styles.nav} ${isActive ? styles.active_nav : null}`}>
      <ul>
        <li>
          <Link
            className={styles.link}
            activeClass={styles.active}
            to='home-id'
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
            onClick={() => setLocalStorage(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            activeClass={styles.active}
            to='about-id'
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
            onClick={toggleTrue}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            activeClass={styles.active}
            to='services-id'
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
            onClick={() => setLocalStorage(true)}>
            Servicios
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            activeClass={styles.active}
            to='customers-id'
            spy={true}
            smooth={true}
            // offset={-70}
            onClick={() => setLocalStorage(true)}
            duration={500}>
            Clientes
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            activeClass={styles.active}
            to='contact-id'
            spy={true}
            smooth={true}
            // offset={-70}
            onClick={toggleTrue}
            duration={500}>
            Contáctanos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
