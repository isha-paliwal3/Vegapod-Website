import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={3}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6}>
          <Container>
          <Row className="align-items-center">
          <Col size={12} sm={6}>
          <ul className="footer-links">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Event</a>
                    </li>                
                </ul>
                </Col>
                <Col size={12} sm={6}>
                <ul className="footer-links">
                    <li>
                        <a href="#">Team</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
          </Col></Row> </Container></Col>
          
          <Col size={12} sm={3} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/team-vegapod/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://m.facebook.com/mitvegapodhyperloop/?__tn__=C-R"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/vegapodhyperloop/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>
        Copyright 2022. All Rights Reserved
            </p>
          </Col>
        </Row>
      
      </Container>
    </footer>
  )
}
