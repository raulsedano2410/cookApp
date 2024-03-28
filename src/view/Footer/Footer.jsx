import React from 'react';
import styles from './Footer.module.css';
import logoFooter from '../../assets/images/logo.svg'

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.img_container}>
        <img
          src={logoFooter}
          alt='logo'
        />
      </div>
      <div className={styles.metadata}>

        <p>Dirección
          Asoc. Villa Real Madrid II Mz B LT 10 S.M.P</p>
        <p>Contácto
          998 244 597
          nquispe_buffete@hotmail.com</p>
        <p>© Copyright N Quispe 2024</p>
      </div>

    </footer>
  );
};

export default Footer;
