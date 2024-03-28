import React from 'react';
import styles from './ContactUs.module.css';
import Footer from '../Footer/Footer';

const ContactUs = () => {
    return (
        <div id='contact-id' className={styles.container} >
            <div

                className={styles.form_container}>
                <div className={styles.title_container}>
                    <h3>¡Contáctanos para trabajar juntos!</h3>
                    <span>¿Te gustaría trabajar con nosotros? Te podemos ayudar</span>
                </div>
                <div className={styles.form}>
                    <input
                        className={styles.fullname}
                        type='text'
                        name='fullname'
                        placeholder='Nombre'
                    />
                    <input
                        className={styles.email}
                        type='email'
                        name='email'
                        placeholder='Email'
                    />
                    <input
                        className={styles.phone}
                        type='tel'
                        name='phone'
                        placeholder='Teléfono'
                    />
                    <input
                        className={styles.profession}
                        type='text'
                        name='profession'
                        placeholder='¿Quién eres?'
                    />
                    <input
                        className={styles.company}
                        type='text'
                        name='company'
                        placeholder='¿A qué empresa representas?'
                    />
                    <input
                        className={styles.needs}
                        type='text'
                        name='needs'
                        placeholder='Mis necesidades'
                    />
                    <label className={styles.check}>
                        <input
                            type='checkbox'
                            name='check'
                        // checked={true}
                        />
                        <span>
                            Acepto que N’Quispe guarde y haga uso de los datos conforme sea
                            conveniente
                        </span>
                    </label>
                    <div className={styles.button_container}>
                        <button className={styles.button}>Estamos en contácto</button>

                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default ContactUs;
