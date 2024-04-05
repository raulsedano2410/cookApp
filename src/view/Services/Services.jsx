import React, { useState } from 'react';
import styles from './Services.module.css';
import servicesData from './services_data.json';
import ServicesCard from '../../components/ServicesCard/ServicesCard';

// import catering from '../../assets/images/catering.jpg';
// import comedor_corporativo from '../../assets/images/comedor_corporativo.png';
// import comedor_mangement from '../../assets/images/comedor_mangement.jpg';
// import food_stop from '../../assets/images/food_stop.jpg';



const Services = () => {
    const [showCard, setShowCard] = useState('Comedor Corporativo');


    return (
        <div
            className={styles.container}
            id='services-id'>
            <section className={styles.contain_box}>
                <div className={styles.title_container}>
                    <h2>Nuestros Servicios</h2>
                </div>
                <div className={styles.cards_container}>
                    {servicesData.map((s) => {
                        return (
                            <ServicesCard
                                showCard={showCard}
                                setShowCard={setShowCard}
                                key={s.id}
                                id={s.id}
                                image={s.image}
                                title={s.title}
                                description={s.description}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Services;
