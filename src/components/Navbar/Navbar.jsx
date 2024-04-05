import React, { useContext, useEffect, useState } from 'react';
import { counterContext } from '../../context/counterContext';
import { Link } from 'react-scroll';
import close_icon from '../../assets/images/navbar_Icons/close_navbar.svg';
import open_icon from '../../assets/images/navbar_Icons/menu_naranja.png'



import styles from './Navbar.module.css';


const Navbar = () => {
    const { toggle, handleToggle, setLocalStorage, setIsActive, isActive } = useContext(counterContext);

    const toggleTrue = () => {
        setIsActive(true);
        handleToggle()

    };
    // const existeElementoHome = () => {
    //     // Verificar si existe un elemento con la clase 'home'
    //     const elementoHome = document.querySelector('.home');
    //     return !!elementoHome; // Devuelve true si existe, false si no
    // };

    // // barToogle = existeElementoHome()
    // if (!existeElementoHome()) {
    //     setLocalStorage(false);
    // }

    // useEffect(() => {
    //     const handleScroll = () => {
    //         // Tu código aquí que quieres ejecutar en cada scroll
    //         console.log('Se hizo scroll!');
    //         if (!existeElementoHome()) {
    //             setLocalStorage(false);
    //         }
    //     };

    //     // Agrega el listener de evento cuando el componente se monta
    //     window.addEventListener('scroll', handleScroll);

    //     // Limpieza: Remueve el listener de evento cuando el componente se desmonte
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []); // Asegúrate de pasar un array vacío como segundo argumento para evitar efectos no deseados debido a la ejecución repetida del efecto


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
                            onClick={toggleTrue}
                        >
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
                    {/* <li>
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
                    </li> */}
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
                {/* <svg className={styles.svg_icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_190_290)">
                        <path d="M23.2792 23.2767C22.314 24.2419 20.7499 24.2419 19.7846 23.2767C19.7295 23.2216 19.6768 23.1665 19.6289 23.1066C19.5882 23.0563 19.5475 23.006 19.5116 22.9533C19.4972 22.9341 19.4852 22.9126 19.4685 22.8886C18.3978 21.3485 11.7846 12.1653 1.12595 4.54372C1.12595 4.53893 1.11877 4.53653 1.11398 4.53414C1.05889 4.49102 1.0014 4.45031 0.943916 4.40959C0.934335 4.4024 0.924754 4.39522 0.915173 4.38803C0.896011 4.37366 0.88164 4.35689 0.864874 4.34492C0.816969 4.3042 0.77146 4.26108 0.728347 4.21797C-0.236923 3.2527 -0.236923 1.68863 0.728347 0.723359C1.69362 -0.24191 3.25769 -0.239515 4.22296 0.723359C4.26607 0.766473 4.30919 0.811982 4.3499 0.859886C4.35948 0.869467 4.36427 0.879048 4.37625 0.888629C4.41936 0.965276 4.53673 1.15929 4.72595 1.4515C4.72595 1.4539 4.72595 1.45629 4.72835 1.45869C6.27565 3.88743 12.5655 13.0994 22.5727 19.2862C22.5727 19.2862 22.5798 19.2886 22.5846 19.291C22.7355 19.3868 22.8888 19.4802 23.0445 19.5713C23.0661 19.5904 23.09 19.6072 23.1116 19.624C23.1715 19.6743 23.2265 19.7246 23.2816 19.7796C24.2469 20.7449 24.2469 22.309 23.2816 23.2743L23.2792 23.2767Z" fill="" />
                        <path d="M23.2768 0.723357C24.2421 1.68863 24.2421 3.2527 23.2768 4.21797C23.2217 4.27306 23.1667 4.32575 23.1068 4.37366C23.0565 4.41437 23.0062 4.45509 22.9535 4.49102C22.9343 4.50539 22.9128 4.51737 22.8888 4.53414C21.3487 5.60479 12.1655 12.218 4.5439 22.8766C4.53911 22.8766 4.53672 22.8838 4.53432 22.8886C4.49121 22.9437 4.45049 23.0012 4.40977 23.0587C4.40258 23.0683 4.3954 23.0778 4.38821 23.0874C4.37384 23.1066 4.35708 23.121 4.3451 23.1377C4.30438 23.1856 4.26127 23.2311 4.21815 23.2743C3.25288 24.2395 1.68881 24.2395 0.723542 23.2743C-0.241727 22.309 -0.239332 20.7449 0.723542 19.7796C0.766656 19.7365 0.812165 19.6934 0.860069 19.6527C0.86965 19.6431 0.879231 19.6383 0.888812 19.6264C0.963063 19.5808 1.15708 19.4635 1.45169 19.2766C1.45408 19.2766 1.45648 19.2766 1.45887 19.2743C3.88761 17.7269 13.0996 11.4371 19.2864 1.42994C19.2864 1.42994 19.2888 1.42276 19.2912 1.41797C19.387 1.26707 19.4804 1.11378 19.5714 0.958087C19.5906 0.93653 19.6074 0.912578 19.6241 0.891021C19.6744 0.831141 19.7247 0.776051 19.7798 0.720961C20.7451 -0.244308 22.3092 -0.244308 23.2744 0.720961L23.2768 0.723357Z" fill="" />
                    </g>
                    <defs>
                        <clipPath id="clip0_190_290">
                            <rect width="24" height="24" fill="" />
                        </clipPath>
                    </defs>
                </svg> */}

            </button>
        </header>
    );
};

export default Navbar;
