import React, { useState } from "react";
import Link from 'next/link'
import styles from './styles/contact.module.css'
import { useForm, ValidationError } from '@formspree/react';



const Contacto = () => {

    const [state, handleSubmit] = useForm("xeqwnroa");

    return (
        <>
            <div className={`${styles.contenedor}`}>
                <section>
                    <div className={`${styles.balloon} nes-balloon`}>
                        <p className={``} style={{ textAlign: 'center' }}>¿Trabajemos juntos? <br />¡Genial! Si deseas contactarme, aquí te comparto mis redes sociales.<br /> ¡Es fácil encontrarme por aquí!</p>

                        <div className={`${styles.icon_container}`}>
                            <Link href='https://www.linkedin.com/in/asael-hernandez-diaz/' target="_blank"><i className="nes-icon linkedin is-large" /></Link>
                            <Link href='mailto:zanduva@gmail.com'><i className="nes-icon gmail is-large" /></Link>
                            <Link href='https://github.com/Azzzako' target="_blank"><i className="nes-icon github is-large" /></Link>
                            <Link href='https://www.instagram.com/azak.cth/'><i className="nes-icon instagram is-large" /></Link>
                        </div>
                        <a href="/assets/cv_fsdev_asael_hernandez.pdf" download style={{ textAlign: 'center', textDecoration:'underline', color:'red' }}>Descargar CV</a>

                        <p className={``} style={{ textAlign: 'center', padding: '20px',  }}>Si prefieres una opción más cómoda, puedes completar este formulario y me pondré en contacto contigo en breve.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="nes-field">
                                <label htmlFor="name">Tu nombre:</label>
                                <input type="text" id="name" name="name" className="nes-input" />
                            </div>
                            <div className="nes-field">
                                <label htmlFor="email">Tu correo:</label>
                                <input type="text" id="email" name="email" className="nes-input" />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="nes-field">
                                <label htmlFor="message">Asunto:</label>
                                <textarea type="text" id="message" name="message" className="nes-input" />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <button type="submit" className="nes-btn" disabled={state.submitting}>Enviar</button>
                        </form>
                        {
                            state.succeeded
                                ?
                                <form method="dialog">
                                    <p className="title">Gracias por tu interes</p>
                                    <p>En cuanto pueda me pondre en contacto contigo! Segurisimo que si!</p>
                                </form>
                                :
                                null
                        }
                    </div>
                </section>
            </div>
        </>

    )
}

export default Contacto
