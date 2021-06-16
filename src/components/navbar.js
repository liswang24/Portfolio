import * as React from 'react'
import { Link } from 'gatsby'
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
                    <Link className={navLinkText}>Projects</Link>
                </li>
                <li className={navLinkItem}>
                    <Link className={navLinkText}>Resume</Link>
                </li>
                <li className={navLinkItem}>
                    <Link className={navLinkText}>Contact</Link>
                </li>
            </ul>
      </nav>
    )
}

export default Navbar