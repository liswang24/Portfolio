import * as React from 'react'
import { Link } from 'gatsby'
import PDF from '../../static/LisaWangResume.pdf'
import {
    navLinkHome,
    navigationBar,
    navLinks,
    navLinkItem,
    navLinkText
  } from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={navigationBar}>
            <Link to="/" id={navLinkHome}>Lisa Wang.</Link>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="/about" className={navLinkText}>About</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/projects" className={navLinkText}>Projects</Link>
                </li>
                <li className={navLinkItem}>
                    <a 
                        className={navLinkText} 
                        rel="noopener noreferrer" 
                        href={PDF} 
                        target="_blank"
                    >Resume</a>
                </li>
                <li className={navLinkItem}>
                    <Link to="/contact" className={navLinkText}>Contact</Link>
                </li>
            </ul>
      </nav>
    )
}

export default Navbar