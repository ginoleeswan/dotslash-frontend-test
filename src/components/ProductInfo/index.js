import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DiscountTag from "../DiscountTag";

const ProductInfo = ({ product }) => {
  const productDetails = product.details.map((detail) => <li>{detail}</li>);

  return (
    <Container className="productInfoContainer">
      <Row className="productInfoTitle">
        <h4>{product.title}</h4>
      </Row>
      <Row className="productInfoSubTitle">
        <h6>
          <FontAwesomeIcon className="productInfoStoreIcon" icon={faStoreAlt} />
          {product.brand}
        </h6>
      </Row>
      <Row className="productInfoMainSection">
        <Row className="mb-3">
          <Col>
            <h5 className="productInfoMainHeaderText">Fabrication</h5>
          </Col>
          <Col>
            <h5 className="productInfoMainHeaderTextInfo">
              {product.fabrication}
            </h5>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h5 className="productInfoMainHeaderText">Color</h5>
          </Col>
          <Col>
            <h5 className="productInfoMainHeaderTextInfo">{product.color}</h5>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h5 className="productInfoMainHeaderText">Brand</h5>
          </Col>
          <Col>
            <h5 className="productInfoMainHeaderTextInfo">{product.brand}</h5>
          </Col>
        </Row>
      </Row>
      <Row className="justify-content-center">
        <Container className="horizontalLine"></Container>
      </Row>
      <Row className="mb-1 productInfoMainSection">
        <h6>Product Details</h6>
      </Row>
      <Row className="productInfoDetailsSection">
        <ul>{productDetails}</ul>
      </Row>

      <Row className="align-items-center justify-content-end">
        <h3 className="productInfoOriginalPrice">R{product.price}</h3>
      </Row>
      <Row className="align-items-center justify-content-end">
        {/* <Col sm={4}></Col> */}
        <Col sm={9} className="productInfoDiscountContainer">
          <DiscountTag amount={product.discount} />
        </Col>
        <Col
          sm={3}
          className="justify-content-end productInfoFinalPriceContainer"
        >
          <h3 className="productInfoFinalPrice">R{product.salePrice}</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductInfo;
