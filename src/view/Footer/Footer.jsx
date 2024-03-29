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

      <p className={styles.address}>Dirección <br />
          Asoc. Villa Real Madrid II Mz B LT 10 S.M.P</p>
      <p className={styles.contact}>Contácto <br />
          998 244 597 <br />
          nquispe_buffete@hotmail.com</p>
      <p className={styles.copyr}>© Copyright N Quispe 2024</p>

    </footer>
  );
};

export default Footer;
