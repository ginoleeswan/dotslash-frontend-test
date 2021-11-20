import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Container className="footer-nav">
      <Row>
        <Col md={10}>
          <Row>
            <Col>
              <h4 className="footerHeader">Account</h4>
              <Row>
                <a href="/details" className="footerLinks">
                  Account Details
                </a>
                <a href="/orders" className="footerLinks">
                  Orders
                </a>
                <a href="/exchanges" className="footerLinks">
                  Returns and Exchanges
                </a>
              </Row>
            </Col>

            <Col>
              <h4 className="footerHeader">The Company</h4>
              <Row>
                <a href="/about" className="footerLinks">
                  About us
                </a>
                <a href="/careers" className="footerLinks">
                  Careers
                </a>
                <a href="/contact" className="footerLinks">
                  Contact
                </a>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col md={2}>
          <h4 className="footerHeader">Follow Us!</h4>
          <Row>
            <p style={{ fontSize: 40 }}>
              <FontAwesomeIcon className="footerIcon" icon={faFacebookSquare} />
              <FontAwesomeIcon className="footerIcon" icon={faInstagram} />
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
