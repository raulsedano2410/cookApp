import React, { useContext, useState } from 'react';
import { counterContext } from '../../context/counterContext';
import { Link } from 'react-scroll';
import close_icon from '../../assets/images/navbar_Icons/close_navbar.svg';
import open_icon from '../../assets/images/navbar_Icons/open_navbar.svg'

import styles from './Navbar.module.css';


const Navbar = () => {
    const { toggle, handleToggle, setLocalStorage, setIsActive, isActive } = useContext(counterContext);

    const toggleTrue = () => {
        setIsActive(true);
        handleToggle()

    };

    return (
        <header className={styles.nav_container}>

            <nav className={`${styles.nav} ${isActive ? styles.active_nav : null} ${toggle ? styles.responsive_nav : ''}`}>
                <ul>
                    <li>
                        <Link
                            className={styles.link}
                            activeClass={styles.home}
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
                <button
                    className={`${styles.nav_close_btn}`}
                    onClick={handleToggle}
                >
                    <img src={close_icon} alt="close navigation bar" />
                </button>
            </nav>
            <button
                className={styles.nav_btn}
                onClick={handleToggle}
            >

                <img src={open_icon} alt="open navbar" />
            </button>
        </header>
    );
};

export default Navbar;
