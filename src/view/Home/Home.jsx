import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      id='home-id'
      className={styles.container}>
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
