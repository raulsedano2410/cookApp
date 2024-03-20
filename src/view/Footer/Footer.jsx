import React from 'react';
import footer from '../../assets/images/footer.png';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <img
        src={footer}
        alt='footer'
      />
    </div>
  );
};

export default Footer;
