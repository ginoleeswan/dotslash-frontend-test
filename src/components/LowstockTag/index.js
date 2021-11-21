import React from "react";
import { Container, Row } from "react-bootstrap";

const LowstockTag = () => {
  return (
    <Container className="lowStockTagContainer">
      <Row className="align-items-center justify-content-center h-100">
        <p className="discountTagText">LOW STOCK</p>
      </Row>
    </Container>
  );
};

export default LowstockTag;
