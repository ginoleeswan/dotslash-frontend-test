import {
  faSearch,
  faEnvelope,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";

const MailingList = () => {
  return (
    <Container className="mailContainer">
      <Row>
        <p
          style={{
            textAlign: "end",
            marginTop: 10,
            fontSize: 14,
            marginBottom: -20,
          }}
        >
          <FontAwesomeIcon className="mailIcon" icon={faTimes} />
        </p>
      </Row>
      <Row className="mb-2 align-items-center justify-content-center">
        <p style={{ textAlign: "center", margin: 0, fontSize: 32 }}>
          <FontAwesomeIcon className="mailIcon" icon={faEnvelope} />
        </p>
      </Row>
      <Row className="mb-3 align-items-center justify-content-center">
        <h4 style={{ textAlign: "center", color: "white" }}>
          Sign up to our mailing list!
        </h4>
      </Row>
      <Form className="searchBoxFormContainer">
        <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
          <Form.Label sm={2}>
            <h6 className="light">email</h6>
          </Form.Label>
          <Form.Control type="email" placeholder="ENTER EMAIL ADDRESS" />
        </Form.Group>

        <Row className="align-items-center justify-content-center">
          <Button className="mailButton mb-4">submit</Button>
        </Row>
      </Form>
    </Container>
  );
};

export default MailingList;
