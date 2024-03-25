import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import styles from './ServicesCard.module.css';
import catering from '../../assets/images/catering.jpg';
import comedor_corporativo from '../../assets/images/comedor_corporativo.png';
import comedor_mangement from '../../assets/images/comedor_mangement.jpg';
import food_stop from '../../assets/images/food_stop.jpg';

const ServicesCard = (props) => {
    const [showImg, setShowImg] = useState();
    useEffect(() => {
        switch (props.image) {
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

    const toogleImage = (event) => {
        props.setShowCard(() => props.title);
    };


    return (
        <div
            className={`${styles.card_container} ${props.showCard !== props.title ? styles.card_hidden : ''
                }`}
            onClick={toogleImage}
        >
            <div className={`${styles.img_container} ${props.showCard == props.title ? styles.active : ''}`}>
                <img
                    className={`${styles.card_img} ${props.showCard == props.title ? styles.active : ''}`}
                    src={showImg}
                    alt={props.title}
                />
            </div>
            <div
                className={`${styles.title_article} ${props.showCard !== props.title ? styles.title_hidden : ''
                    }`}>
                <h4>{props.title}</h4>
            </div>
            <article
                className={`${styles.article_container} ${props.showCard == props.title ? styles.active : ''
                    }`}>
                <p className={styles.description_article}>{props.description}</p>
            </article>
        </div>
    );
};

export default ServicesCard;
