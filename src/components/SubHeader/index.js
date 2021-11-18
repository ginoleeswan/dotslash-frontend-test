import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SubHeader = () => {
  return (
    <Container className="sub-header ">
      <Row className="align-items-center justify-content-center h-100">
        <Col sm={8}>
          <div class="text-center">Adventure is just around the corner!</div>
        </Col>
        <Col sm={2}>
          <div class="text-center">Find a Store</div>
        </Col>
        <Col sm={2}>
          <div class="text-center">Not in South Africa?</div>
        </Col>
      </Row>
    </Container>
  );
};

export default SubHeader;
