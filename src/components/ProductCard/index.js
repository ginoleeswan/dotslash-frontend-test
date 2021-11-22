import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { faStoreAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DiscountTag from "../DiscountTag";
import LowstockTag from "../LowstockTag";

const ProductCard = ({
  name,
  brand,
  price,
  image,
  sale,
  discount,
  lowStock,
}) => {
  return (
    <Card>
      <a href="/#" className="cardViewLink">
        <Card.Img variant="top" alt={name} src={image} />
        <Container style={{ position: "absolute", left: 106, top: 10 }}>
          {sale ? <DiscountTag amount={discount} /> : null}
        </Container>
        <Container style={{ position: "absolute", left: -13, bottom: 130 }}>
          {lowStock ? <LowstockTag /> : null}
        </Container>
        <Card.Body style={{ padding: 10, paddingTop: 15 }}>
          <Card.Title className="mb-2" style={{ color: "#111111" }}>
            <h4 style={{ fontSize: 18 }}>{name}</h4>
          </Card.Title>
          <Card.Subtitle className="mb-3">
            <h5>
              <FontAwesomeIcon
                className="productCardStoreIcon"
                icon={faStoreAlt}
              />{" "}
              {brand}
            </h5>
          </Card.Subtitle>
          <Row>
            <Col style={{ width: "60%", maxWidth: "60%" }}>
              <Card.Text>
                <h4 style={{ color: "#00a2ff" }}>R{price}</h4>
              </Card.Text>
            </Col>
            <Col style={{ width: "40%", maxWidth: "40%" }}>
              <a href="/#" className="cardViewLink">
                View{" "}
                <FontAwesomeIcon
                  className="productCardArrowIcon"
                  icon={faArrowRight}
                />
              </a>
            </Col>
          </Row>
        </Card.Body>
      </a>
    </Card>
  );
};

export default ProductCard;
