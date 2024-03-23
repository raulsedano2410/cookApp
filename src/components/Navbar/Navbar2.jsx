import React, { useState } from 'react';
import { Link } from 'react-scroll';
import useLocalStorage from '../../Hooks/useLocalStorage';

import { NavHashLink } from 'react-router-hash-link';

import styles from './Navbar.module.css';


const Navbar2 = () => {
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
                    <NavHashLink
                        to='#home-id'
                        activeClassName={styles.active}
                        className={styles.link}
                        smooth
                        name='home'
                        data-active={true}
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        onClick={(e) => console.log(e.target.to)}
                    >
                        {/* onClick={() => setLocalStorage(false)}> */}
                        Home
                    </NavHashLink >

                </li>
                <li>
                    <NavHashLink
                        to='#about-id'
                        activeClassName={styles.active}
                        className={styles.link}
                        smooth

                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        onClick={() => setLocalStorage(false)}>
                        Nosotros
                    </NavHashLink >

                </li>
                <li>
                    <NavHashLink
                        to='#services-id'
                        activeClassName={styles.active}
                        className={styles.link}
                        smooth

                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        onClick={() => setLocalStorage(false)}>
                        Servicios
                    </NavHashLink >

                </li>
                <li>
                    <NavHashLink
                        to='#customers-id'
                        activeClassName={styles.active}
                        className={styles.link}
                        smooth

                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        onClick={() => setLocalStorage(false)}>
                        Clientes
                    </NavHashLink >

                </li>
                <li>
                    <NavHashLink
                        to='#contact-id'
                        activeClassName={styles.active}
                        className={styles.link}
                        smooth

                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        onClick={() => setLocalStorage(false)}>
                        Contáctanos
                    </NavHashLink >

                </li>

            </ul>
        </nav>
    );
};

export default Navbar2;
