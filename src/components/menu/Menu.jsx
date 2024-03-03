import React from 'react'
import {Navbar,Container,Nav,NavDropdown } from "react-bootstrap"
import Logo from "../../assets/logo.png"
import "./menu.css"
import {Link} from "react-router-dom"

const Menu = () => {
  return (
    <div className='menu_main'>
    <Navbar expand="lg" className='menu-bg'>
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className='home'>Home</Link>
            <Link to="/about" className='home'>About Us</Link>
            <Link to="/pricing" className='home'>Pricing</Link>
            <Link to="/features" className='home'>Features</Link>
            <Link to="/work" className='home'>Work</Link>
            <Link to="/case" className='home'>Case</Link>
            <Link to="/blog" className='home'>Blog</Link>
            <Link to="/readblog" className='home'>Read</Link>
            <Link to="/privacy" className='home'>Privacy</Link>
            <Link to="/contact" className='button'>Contact Us</Link>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu