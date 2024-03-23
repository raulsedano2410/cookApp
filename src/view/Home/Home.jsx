import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo.svg'

const Home = () => {
  return (
    <div
      id='home-id'
      className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <Link
        className={styles.vector}
        to='about-id'
        smooth={true}
        duration={500}>
        &#10094;
      </Link>
    </div>
  );
};

export default Home;
