import axios from "axios";
import React, { useState } from "react";
import Image from 'next/image'
import styles from './styles/coderev.module.css'
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { SiRedux, SiExpress, SiSequelize, SiPostgresql, SiBootstrap, SiMaterialdesign } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'


//https://api.giphy.com/v1/gifs/search?api_key=UuCkb2kXmu2TK2r9jF4yO4MGJhzc4UYj&q=gatos&limit=25&offset=0&rating=g&lang=es

const CodeRev = () => {

    const [response, setResponse] = useState(null)
    const [search, setSearch] = useState('')

    const getGif = async (search) => {
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=UuCkb2kXmu2TK2r9jF4yO4MGJhzc4UYj&q=${search}&limit=25&offset=0&rating=g&lang=es`)
        setResponse(res.data.data)
    }

    const onChangeInput = (e) => {
        e.preventDefault
        setSearch(e.target.value)
    }

    const onSearch = async () => {
        await getGif(search)
        setSearch('')
    }



    console.log(response);

    return (
        <div className={`${styles.container}`}>
            <section>
                <div className={`${styles.balloon} nes-balloon`}>
                    <p style={{ textAlign: 'center', margin: '40px' }}>¡Hey, qué onda! Si llegaste hasta aquí es porque quieres conocer mi Stack. ¡Échale un ojo abajo y descubre de qué estoy hecho!</p>
                </div>

                <div className={`${styles.badges}`}>
                    <div className={`nes-badge is-icon`}>
                        <span className="is-dark is-small"><IoLogoJavascript style={{ fontSize: '20px', fill: 'yellow', color: 'black' }} /></span>
                        <span className={`${styles.title} is-error`} style={{ color: 'yellow', width: '120%' }}>JS</span>
                    </div>
                    <div className={`nes-badge is-icon`}>
                        <span className="is-warning "><IoLogoNodejs style={{ fontSize: '20px', fill: 'green', color: 'black' }} /></span>
                        <span className={`${styles.title} is-success`} style={{ color: 'green', width: '120%' }}>NodeJs</span>
                    </div>
                    <div className={`nes-badge is-icon`}>
                        <span className="is-dark is-small"><FaReact style={{ fontSize: '20px', fill: 'aqua', color: 'black' }} /></span>
                        <span className={`${styles.title} is-success`} style={{ color: 'aqua', width: '120%' }}>React</span>
                    </div>
                    <div className={`nes-badge is-icon`}>
                        <span className="is-primary is-small"><SiRedux style={{ fontSize: '20px', fill: '#7248B6', color: 'black' }} /></span>
                        <span className={`${styles.title} is-warning`} style={{ color: '#7248B6', width: '120%' }}>Redux</span>
                    </div>
                    <div className={`nes-badge is-icon`}>
                        <span className="is-primary is-small"><TbBrandNextjs style={{ fontSize: '20px', fill: 'white', color: 'black' }} /></span>
                        <span className={`${styles.title} is-primary`} style={{ color: 'white', width: '120%' }}>NextJs</span>
                    </div>
                    <div className={`nes-badge is-icon`}>
                        <span className="is-success is-small"><SiExpress style={{ fontSize: '20px', fill: 'white', color: 'black' }} /></span>
                        <span className={`${styles.title} is-error`} style={{ color: 'white', width: '120%' }}>Express</span>
                    </div>
                    <div className={`nes-badge is-icon`}>
                        <span className="is-error is-small"><SiSequelize style={{ fontSize: '20px', fill: 'white', color: 'black' }} /></span>
                        <span className={`${styles.title} is-success`} style={{ color: 'white', width: '120%' }}>Sqlize</span>
                    </div>
                    <div className={`nes-badge is-icon`}>
                        <span className="is-warning is-small"><SiPostgresql style={{ fontSize: '20px', fill: '#2C5D8B', color: '#2C5D8B' }} /></span>
                        <span className={`${styles.title} is-error`} style={{ color: '#4383B9', width: '120%' }}>SQL</span>
                    </div>
                    <div className={`nes-badge is-icon`}>
                        <span className="is-dark is-small"><SiMaterialdesign style={{ fontSize: '20px', fill: 'white', color: 'black' }} /></span>
                        <span className={`${styles.title} is-primary`} style={{ width: '120%', color: 'white' }}>Mat UI</span>
                    </div>
                    <div className={`nes-badge is-icon`}>
                        <span className="is-warning is-small"><SiBootstrap style={{ fontSize: '20px', fill: '#7248B6', color: 'black' }} /></span>
                        <span className={`${styles.title} is-warning`} style={{ width: '120%', color: '#7248B6' }}>Btstrp</span>
                    </div>
                </div>
                <p></p>
                <div className={`${styles.balloon} nes-balloon`}>
                    <p style={{ textAlign: 'center', margin: '40px' }}>Lo sé, lo sé, quizás todavía no la armo tanto, pero voy en camino y estoy aprendiendo un monton de este mundo tan extenso del desarrollo web.</p>
                </div>
            </section>

            <section>
                <div className={`${styles.balloon} nes-balloon`}>
                    <p style={{ textAlign: 'center', margin: '40px' }}>...En fin, ¿Sabes qué onda? También tengo habilidades en la creación y consumo de APIs. ¿No me crees? ¡Échale un ojo aquí abajo y busca tu GIF favorito!</p>
                </div>

                <div className={`${styles.cont} nes-container with-title is-centered `}>
                    <p className="title" >Buscador de gifs</p>
                    <p style={{ color: 'black' }}>Consumiendo API de Giphy </p>
                    <div className="nes-field">
                        <label htmlFor="search" style={{ color: 'black' }}>Busca busca busca!!!!!</label>
                        <input className="nes-input" type="text" id="search" value={search} onChange={onChangeInput} />
                        <button className="nes-btn is-warning" onClick={onSearch}>Dale dale!</button>
                    </div>
                    {
                        response ?
                            <img src={response[0]?.images.original.url} alt={response[0]?.title} width={200} height={200} crossOrigin="anonymous" />
                            :
                            <p>Tienes que buscar para que algo aparezca aqui</p>
                    }
                </div>

                <div className={`${styles.balloon} nes-balloon`}>
                    <p style={{ textAlign: 'center', margin: '40px' }}>Es importante destacar que cuento con un conjunto de habilidades sólidas en el desarrollo web, y estoy enfocado en mejorar y perfeccionar mis fortalezas. En este sentido, mi pasión se centra en el aprendizaje continuo y en la creación de sitios web atractivos y funcionales.</p>
                </div>
            </section>
        </div>
    )
}

export default CodeRev
