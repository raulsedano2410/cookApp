import React from 'react';
import frame from '../../assets/images/frame.png';
import styles from './Customers.module.css';

const Customers = () => {
  return (
    <div
      id='customers-id'
      className={styles.customers_container}>
      <div className={styles.title_container}>
        <h3>Todos nuestros clientes satisfechos</h3>
        <span>
          Nuestra calidad es importante para que nuestros clientes queden
          satisfechos
        </span>
      </div>
      <div className={styles.flags_container}>
        <img
          src={frame}
          alt='customers flags'
        />
      </div>
    </div>
  );
};

export default Customers;
