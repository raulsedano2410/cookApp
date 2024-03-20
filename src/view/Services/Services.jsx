import React from 'react';
import styles from './Services.module.css';
import servicesData from './services_data.json';
import ServicesCard from '../../components/ServicesCard/ServicesCard';

// import catering from '../../assets/images/catering.jpg';
// import comedor_corporativo from '../../assets/images/comedor_corporativo.png';
// import comedor_mangement from '../../assets/images/comedor_mangement.jpg';
// import food_stop from '../../assets/images/food_stop.jpg';

const Services = () => {
  return (
    <div
      className={styles.service_container}
      id='services-id'>
      <div className={styles.title_container}>
        <h3>Nuestros Servicios</h3>
      </div>
      <div className={styles.cards_container}>
        {servicesData.map((prop) => {
          return (
            <ServicesCard
              key={prop.id}
              image={prop.image}
              title={prop.title}
              description={prop.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
