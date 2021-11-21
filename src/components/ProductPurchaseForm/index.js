import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";

const ProductPurchaseForm = () => {
  return (
    <Container className="purchaseFormContainer">
      <Form>
        <Form.Group as={Row} className="mb-4" controlId="formHorizontalSize">
          <Form.Label sm={2}>
            <h5 className="purchaseFormLabel">size</h5>
          </Form.Label>
          <Form.Select aria-label="Default select example">
            <option key="blankChoice" hidden value="1">
              SELECT SIZE
            </option>
            <option value="2">US 5</option>
            <option value="3">US 6</option>
            <option value="4">US 7</option>
            <option value="5">US 9</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-5"
          controlId="formHorizontalQuantity"
        >
          <Form.Label sm={2}>
            <h5 className="purchaseFormLabel">quantity</h5>
          </Form.Label>
          <Form.Select aria-label="Default select example">
            <option key="blankChoice" hidden value="1">
              SELECT QUANTITY
            </option>
            <option value="2">1</option>
            <option value="3">2</option>
            <option value="4">3</option>
            <option value="5">4</option>
            <option value="6">5</option>
          </Form.Select>
        </Form.Group>

        <Row className="align-items-center justify-content-center">
          <Button className="purchaseFormButton mb-4">
            {" "}
            <FontAwesomeIcon className="purchaseFormIcon" icon={faCartPlus} />
            ADD TO CART
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default ProductPurchaseForm;
