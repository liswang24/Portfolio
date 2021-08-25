import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Navbar, Nav } from "react-bootstrap"
import PDF from '../../static/LisaWangResume.pdf'
import { navLinkHome } from '../styles/navigation.module.css'

const Navigation = () => {
    return (
        <header>
            <Container>
                <Navbar expand="md" collapseOnSelect={true}>
                <Navbar.Brand><Link to="/" id={navLinkHome}>Lisa Wang.</Link></Navbar.Brand>   
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end">
                        <Link to="/about" className="nav-link" activeClassName="active">About</Link>
                        <Link to="/projects" className="nav-link"  activeClassName="active">Projects</Link>
                        <a 
                                    className="nav-link"
                                    rel="noopener noreferrer" 
                                    href={PDF} 
                                    target="_blank"
                                    >Resume</a>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    )
}

export default Navigation