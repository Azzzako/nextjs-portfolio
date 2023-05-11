import React from "react";
import Link from 'next/link'
import styles from '../components/navbar.module.css'

const Navbar = () => {

    
    return (
        <nav className={styles.nav_cont}>
            <div className={styles.nav}>
                <Link href='/' className={`${styles.badge} nes-badge is-icon`}>
                    <span className="is-error">Hi!</span>
                    <span className="is-warning" style={{ fontSize: '10px', width: '110%' }}>Azzako</span>
                </Link>
                <Link href='/coderev' className={`${styles.badge} nes-badge is-icon`}>
                    <span className="is-error"><i className="nes-icon coin is-small" /></span>
                    <span className="is-warning" style={{ fontSize: '10px', width: '110%' }}>{`</>`}</span>
                </Link>
                <Link href='/contacto' className={`${styles.badge} nes-badge is-icon`}>
                    <span className="is-error"><i className="nes-icon heart is-small" /></span>
                    <span className="is-warning" style={{ fontSize: '10px', width: '110%' }}>Contacto</span>
                </Link>
            </div>


        </nav>
    )
}


export default Navbar
