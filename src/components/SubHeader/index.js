import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SubHeader = () => {
  return (
    <Container className="sub-header ">
      <Row className="align-items-center justify-content-center h-100">
        <Col sm={8}>
          <div class="text-center">Adventure is just around the corner!</div>
        </Col>
        <Col sm={2}>
          <Button className="btn-outline" variant="outline-primary">
            Find a Store
          </Button>
        </Col>
        <Col sm={2}>
          <a href="/#" className="grey-link text-center">
            Not in South Africa?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default SubHeader;
