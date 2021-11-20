import React from "react";
import { Container, Row } from "react-bootstrap";
import advert from "../../images/ad.png";

const Advert = () => {
  return (
    <Container className="commercialContainer">
      <img src={advert} width="307" alt="advert" />
    </Container>
  );
};

export default Advert;
