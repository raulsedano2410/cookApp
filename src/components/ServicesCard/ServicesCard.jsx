import React, { useEffect, useState } from 'react';
import styles from './ServicesCard.module.css';
import catering from '../../assets/images/catering.jpg';
import comedor_corporativo from '../../assets/images/comedor_corporativo.png';
import comedor_mangement from '../../assets/images/comedor_mangement.jpg';
import food_stop from '../../assets/images/food_stop.jpg';

const ServicesCard = (prop) => {
  const [showImg, setShowImg] = useState();
  useEffect(() => {
    switch (prop.image) {
      case 'food_stop.jpg':
        setShowImg(food_stop);
        break;
      case 'comedor_corporativo.png':
        setShowImg(comedor_corporativo);
        break;
      case 'catering.jpg':
        setShowImg(catering);
        break;
      case 'comedor_mangement_system.jpg':
        setShowImg(comedor_mangement);
        break;
      default:
        setShowImg(null);
        break;
    }
  }, []);

  return (
    <div className={styles.card_container}>
      <div className={styles.img_container}>
        <img
          className={styles.card_img}
          src={showImg}
          alt={prop.title}
        />
      </div>
      <article className={styles.article_container}>
        <h4 className={styles.title_article}>{prop.title}</h4>
        <p className={styles.description_article}>{prop.description}</p>
      </article>
    </div>
  );
};

export default ServicesCard;
