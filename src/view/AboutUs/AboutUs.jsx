import React from 'react';
import styles from './AboutUs.module.css';
import imge01 from '../../assets/images/frame_dual_image.png';

const AboutUs = () => {
  return (
    <div
      id='about-id'
      className={styles.container}>
      <div className={styles.title}>
        <h3 >¿Qué nos hace diferentes?</h3>
      </div>
      <article className={styles.article}>
        <span>
          Somos especialistas en calidad, eficacia, bienestar y
          adaptabilidad
        </span>
        <p>
          Somos una empresa con más de 10 años de experiencia, dedicada a la
          adquisición y administración de Concesionarios; y brindar servicios a
          nivel corporativo tanto instituciones estatales como particulares.
          <br />
          <br />
          Disponemos con un equipo capacitado en la manipulación de alimentos,
          atención al cliente y asesoramiento nutricional según la necesidad de
          nuestro cliente. Nuestra experiencia nos hace conocedores de las
          necesidades y la flexibilidad de adaptarnos al cliente.
        </p>
      </article>
      <div className={styles.images_container}>
        <img
          src={imge01}
          alt=''
        />
      </div>
    </div>
  );
};

export default AboutUs;
