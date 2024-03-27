import React, { useContext, useState } from 'react';
import { counterContext } from '../../context/counterContext';
import styles from './Home.module.css';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo.svg'

const Home = () => {
  const { toggleTrue } = useContext(counterContext);

  return (
    <div
      id='home-id'
      className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <Link
        className={styles.vector}
        to='about-id'
        smooth={true}
        duration={500}
        onClick={toggleTrue}>
        &#10094;
      </Link>
    </div>
  );
};

export default Home;
