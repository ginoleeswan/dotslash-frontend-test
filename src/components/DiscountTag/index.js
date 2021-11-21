import React from "react";
import { Container, Row } from "react-bootstrap";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DiscountTag = ({ amount }) => {
  return (
    <Container className="discountTagContainer">
      <Row className="align-items-center justify-content-center">
        <p className="discountTagText">
          <FontAwesomeIcon className="discountTagIcon" icon={faTag} />-{amount}%
          Off
        </p>
      </Row>
    </Container>
  );
};

export default DiscountTag;
