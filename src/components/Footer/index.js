import React from "react";
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
                <a href="#" className="footerLinks">
                  Account Details
                </a>
                <a href="#" className="footerLinks">
                  Orders
                </a>
                <a href="#" className="footerLinks">
                  Returns and Exchanges
                </a>
              </Row>
            </Col>

            <Col>
              <h4 className="footerHeader">The Company</h4>
              <Row>
                <a href="#" className="footerLinks">
                  About us
                </a>
                <a href="#" className="footerLinks">
                  Careers
                </a>
                <a href="#" className="footerLinks">
                  Contact
                </a>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col md={2}>
          <h4 className="footerHeader">Follow Us!</h4>
          <Row>
            <Col>
              <a href="#" style={{ fontSize: 40 }}>
                <FontAwesomeIcon
                  className="footerIcon"
                  icon={faFacebookSquare}
                />
              </a>
            </Col>
            <Col>
              <a href="#" style={{ fontSize: 40 }}>
                <FontAwesomeIcon className="footerIcon" icon={faInstagram} />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
