import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SubHeader = () => {
  return (
    <Container className="sub-header ">
      <Row className="align-items-center justify-content-center h-100">
        <Col sm={7}>
          <div class="text-center">Adventure is just around the corner!</div>
        </Col>
        <Col sm={2}>
          <Row className="align-items-center justify-content-center">
            <Button className="btn-outline" variant="outline-primary">
              Find a Store
            </Button>
          </Row>
        </Col>
        <Col sm={3}>
          <Row className="align-items-center justify-content-center">
            <a href="/#" className="grey-link text-center">
              Not in South Africa?
            </a>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SubHeader;
