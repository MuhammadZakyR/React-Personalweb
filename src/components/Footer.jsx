import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo2.png";
import { FaInstagram, FaFacebookF, FaGithub, FaLinkedin} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="d-none d-md-inline" size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/muhammad_zaky.r/"><FaInstagram size={32} color="white"/></a>
              <a href="https://m.facebook.com/people/Muhammad-Zaky-Rahmadany/100007908286100/"><FaFacebookF size={32} color="white"/></a>
              <a href="https://github.com/MuhammadZakyR"><FaGithub size={32} color="white"/></a>
              <a href="https://www.linkedin.com/in/muhammad-zaky-rahmadany-241711230/"><FaLinkedin size={32} color="white"/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
