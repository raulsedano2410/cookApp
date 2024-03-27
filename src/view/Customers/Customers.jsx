import React from 'react';
import frame from '../../assets/images/frame.png';
import styles from './Customers.module.css';
// Images
import autoland from '../../assets/images/customers/autoland.png';
import cobrecon from '../../assets/images/customers/cobrecon.png';
import eternit from '../../assets/images/customers/eter.svg';
import gcz from '../../assets/images/customers/gcz.svg';
import gyplac from '../../assets/images/customers/gyplac.jpg';
import metalindustrias from '../../assets/images/customers/metalindustrias.png';
import molinosasociados from '../../assets/images/customers/molinos.svg';
import nicoll from '../../assets/images/customers/nicoll.svg';
import pegafan from '../../assets/images/customers/pegafan.png';
import piramide from '../../assets/images/customers/piramide.png';
import tqc from '../../assets/images/customers/tqc.webp';

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
            <section className={styles.flags_container}>
                <div className={styles.flag}>
                    <img
                        src={pegafan}
                        alt='customers flags'
                    />
                </div>
                <div className={styles.flag}>
                    <img
                        src={piramide}
                        alt='customers flags'
                    />
                </div>
                <div className={styles.flag}>
                    <img
                        src={tqc}
                        alt='customers flags'
                    />
                </div>
                <div className={styles.flag}>
                    <img
                        src={autoland}
                        alt='customers flags'
                    />
                </div>
                <div className={styles.flag}>
                    <img
                        src={molinosasociados}
                        alt='customers flags'
                    />
                </div>
                <div className={styles.flag}>
                    <img
                        src={nicoll}
                        alt='customers flags'
                    />
                </div>
                <div className={styles.flag}>
                    <img
                        src={cobrecon}
                        alt='customers flags'
                    />
                </div>
                <div className={styles.flag}>
                    <img
                        src={eternit}
                        alt='customers flags'
                    />
                </div>
                <div className={styles.flag}>
                    <img
                        src={gcz}
                        alt='customers flags'
                    />
                </div>
                <div className={styles.flag}>
                    <img
                        src={gyplac}
                        alt='customers flags'
                    />
                </div>
                <div className={styles.flag}>
                    <img
                        src={metalindustrias}
                        alt='customers flags'
                    />
                </div>

            </section>
        </div>
    );
};

export default Customers;
