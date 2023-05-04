import React, { useEffect, useState } from "react";
import 'nes.css/css/nes.css';
import style from '../pages/styles/about.module.css'
import Image from 'next/image'
import photo from '../public/assets/azako.jpg'

const About = () => {

    const [text, setText] = useState('');
    

    const globeOne = `\n¡Ey! ¿Qué tal? Soy Asael, un ninja del Desarrollo Front-End con más de 800 horas de práctica en JavaScript, ES6, React JS, Redux, HTML, CSS, Node JS, Express y SQL. Busco nuevas oportunidades para seguir creciendo en mi carrera.

    \nSiempre estoy al día en las últimas tendencias y novedades, soy muy curioso y siempre busco nuevas formas de mejorar mis habilidades. Me encanta trabajar en equipo y creo que la colaboración y el intercambio de ideas son fundamentales para el éxito de cualquier proyecto.
    
    \nSi tienes alguna oportunidad interesante en el mundo del Desarrollo Front-End, no dudes en contactarme. Soy un desarrollador apasionado y entusiasta que siempre está buscando un nuevo desafío.
    
    ¡Gracias por tu tiempo y consideración!
    `


    useEffect(() => {
        let currentIndexOne = 0;

        const intervalGlobeOne = setInterval(() => {
            if (currentIndexOne < globeOne.length) {
                let currentChar = globeOne[currentIndexOne];
                if (currentChar === '\n') {
                    currentChar = <br />;
                }
                setText(prevText => [...prevText, currentChar]);
                currentIndexOne++;
            } else {
                clearInterval(intervalGlobeOne);
            }
        }, 40);

        return () => {
            clearInterval(intervalGlobeOne);
        };
    }, []);

    return (
        <>
            <section className={`${style.about_cont} nes-container`} style={{ display: 'flex' }}>
                <section className={`${style.about} nes-container`}>
                    <section className="message-list">
                        <section className="message -left">
                            <div className={`${style.containAbout} nes-balloon from-left`}>
                                <div className={style.coin}>
                                    <i className={`${style.coin_icon} nes-icon coin is-medium`}></i>
                                    <i className={`${style.coin_icon} nes-icon coin is-medium`}></i>
                                </div>
                                <div className={style.image_cont}>
                                    <Image
                                        src={photo}
                                        alt="azzako.jpeg"
                                        className={style.image}
                                    />
                                </div>
                                <h1 className={style.title}>{`Asael FrontEnd Developer`}</h1>
                                <div className={style.coin}>
                                    <i className={`${style.coin_icon} nes-icon coin is-medium`}></i>
                                    <i className={`${style.coin_icon} nes-icon coin is-medium`}></i>
                                </div>
                                <p className={style.text}>{text}</p>
                            </div>


                        </section>
                    </section>
                </section>
            </section >
        </>

    )
}

export default About
