import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { useNavigate } from 'react-router-dom';


export const NavBar = () => {
  const navigate = useNavigate(); 
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{height:"70px", width:"70px"}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => navigate('/')}>Home</Nav.Link>
              <Nav.Link href="/AboutPage" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about') && navigate('/AboutPage')}>About</Nav.Link>
              <Nav.Link href="/TeamPage" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={() => navigate('/TeamPage') && onUpdateActiveLink('team') }>Team</Nav.Link>
              <Nav.Link href="/EventPage" className={activeLink === 'events' ? 'active navbar-link' : 'navbar-link'} onClick={() => navigate('/EventPage')}>Events</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/company/team-vegapod/"><img src={navIcon1} alt="" /></a>
                <a href="https://m.facebook.com/mitvegapodhyperloop/?__tn__=C-R"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/vegapodhyperloop/"><img src={navIcon3} alt="" /></a>
              </div>
             
                <button className="vvd" onClick={() => navigate('/ContactPage')}><span>Let’s Connect</span></button>
           
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
