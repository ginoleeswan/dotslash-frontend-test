import React, { useState } from "react";
import rewayLogo from "../../images/Logo.svg";
import {
  Navbar,
  Container,
  Nav,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faStar,
  faHeart,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [active, setActive] = useState("/shoes");

  return (
    <Navbar bg="white" expand="lg" className="header-nav" fixed="top">
      <Container>
        <Navbar.Brand className="navLogo" href="#home">
          <img
            src={rewayLogo}
            width="163.69"
            height="44.81"
            className="d-inline-block align-top"
            alt="Reway logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            activeKey={active}
            onSelect={(selectedKey) => setActive(selectedKey)}
            className="me-auto"
          >
            <Nav.Link href="#">Apparels</Nav.Link>
            <Nav.Link href="#">Shoes</Nav.Link>
            <Nav.Link href="#">Equipment</Nav.Link>
            <Nav.Link href="#">Gift</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#">
            <FontAwesomeIcon className="navIcon" icon={faGift} />
          </Nav.Link>
          <Nav.Link href="#">
            <FontAwesomeIcon className="navIcon" icon={faStar} />
          </Nav.Link>
          <Nav.Link href="#">
            <FontAwesomeIcon className="navIcon" icon={faHeart} />
          </Nav.Link>
          <Nav.Link href="#">
            <FontAwesomeIcon className="navIcon" icon={faTag} />
          </Nav.Link>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#signup">Sign Up</Nav.Link>
          <Button
            href="#login"
            className="btn-outline loginButton"
            variant="outline-primary"
          >
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
