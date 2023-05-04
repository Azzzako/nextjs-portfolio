import axios from "axios";
import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/coderev.module.css'
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { SiRedux, SiExpress, SiSequelize, SiPostgresql, SiBootstrap, SiMaterialdesign } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import todo from '../public/assets/todomachine.png'
import palace from '../public/assets/gamingpalacesss.png'
import home from '../public/assets/home.png'
import cana from '../public/assets/cannablitzzzz.png'


//https://api.giphy.com/v1/gifs/search?api_key=UuCkb2kXmu2TK2r9jF4yO4MGJhzc4UYj&q=gatos&limit=25&offset=0&rating=g&lang=es

const CodeRev = () => {

    const [response, setResponse] = useState(null)
    const [search, setSearch] = useState('')
    const [centrarDiv, setCentrarDiv] = useState(false)

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

    const centerDiv = () => {
        setCentrarDiv(true)
    }

    const projects = [
        {
            image: palace,
            alt: 'Gaming Palace e-Commerce',
            width: 200,
            link: 'https://gp-front.vercel.app/home'
        },
        {
            image: cana,
            alt: 'Cannablitz e-Commerce (desarrollo)',
            width: 200,
            link: 'https://github.com/Azzzako/cannablitz'
        },
        {
            image: home,
            alt: 'Henry Foods (practica)',
            width: 200,
            link: 'https://github.com/Azzzako/PI_foods'
        },
        {
            image: todo,
            alt: 'Todo Machine (practica)',
            width: 200,
            link:'https://azzzako.github.io/todo-machine/'
        }

    ]


    return (
        <div className={`${styles.container}`}>
            <section>
                <div className={`${styles.balloon} nes-balloon`}>
                    <p className={`${styles.text_text}`} style={{ textAlign: 'center' }}>¡Hey, qué onda! <br />Si llegaste hasta aquí es porque quieres conocer mi Stack. <br />¡Échale un ojo abajo y descubre de qué estoy hecho!</p>
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

                <div className={`${styles.balloon_projects} nes-balloon is-dark`}>
                    <p className={`${styles.text_text}`} style={{ textAlign: 'center' }}>Estos son algunos de los proyectos que he construido con las tecnologias anteriores</p>
                    {projects.map(project => {
                        return <div className={`${styles.project} nes-container is-centered`}>
                            <Link href={project.link} target="_blank" style={{textDecoration:'none', color:'white'}}>
                            <p>{project.alt}</p>
                            <Image
                                src={project.image}
                                alt={project.alt}
                                width={project.width}
                                style={{ objectFit: 'contain' }}
                            />
                            </Link>
                        </div>
                    })}
                </div>

                <div className={`${styles.balloon} nes-balloon`}>
                    <p className={`${styles.text_text}`} style={{ textAlign: 'center' }}>Me encuentro en constante preparación y aprendizaje diario, pues mi objetivo es ser un desarrollador excepcional. <br />Me esfuerzo constantemente para enfrentar nuevos desafíos y aprender nuevas habilidades que me permitan crecer y mejorar en mi carrera..</p>
                </div>
            </section>

            <section>
                <div className={`${styles.balloon} nes-balloon`}>
                    <p className={`${styles.text_text}`} style={{ textAlign: 'center' }}>...En fin, ¿Sabes qué onda? <br />También tengo habilidades en la creación y consumo de APIs. <br />¿No me crees? ¡Échale un ojo aquí abajo y busca tu GIF favorito!</p>
                </div>

                <div className={`${styles.cont} nes-container with-title is-centered `}>
                    <p className="title" >Buscador de gifs</p>
                    <i className="nes-octocat animate" />
                    <p style={{ color: 'black' }}>Consumiendo API de Giphy </p>
                    <div className="nes-field">
                        <label htmlFor="search" style={{ color: 'black' }}>Busca busca busca!!!!!</label>
                        <input className="nes-input" type="text" id="search" value={search} onChange={onChangeInput} />
                        <button className="nes-btn is-warning" onClick={onSearch}>Dale dale!</button>
                    </div>
                    {
                        response || response?.length < 0 ?
                            <div className={`${centrarDiv ? styles.gif_cont_cent : styles.gif_cont}`}>
                                <img src={response[0]?.images.original.url} alt={response[0]?.title} width={200} height={200} crossOrigin="anonymous" className={`${styles.gif}`} />
                                <p>{`Aprovecha este gif para que veas que tambien se centrar los <div>`}</p>
                                <button className="nes-btn" onClick={centerDiv}>Centrar DIV</button>
                            </div>
                            :
                            <p>Tienes que buscar para que algo aparezca aqui</p>
                    }
                </div>

                <div className={`${styles.balloon} nes-balloon`}>
                    <p className={`${styles.text_text}`} style={{ textAlign: 'center' }}>Es importante destacar que cuento con un conjunto de habilidades sólidas en el desarrollo web, y estoy enfocado en mejorar y perfeccionar mis fortalezas. En este sentido, mi pasión se centra en el aprendizaje continuo y en la creación de sitios web atractivos y funcionales.</p>
                </div>
            </section>
        </div>
    )
}

export default CodeRev
