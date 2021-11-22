import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import topBanner from "../../images/TopBanner.png";

const TopBanner = () => {
  return (
    <Container className="topBannerContainer">
      <img src={topBanner} alt="top banner"></img>

      <Row
        style={{
          position: "relative",
          left: 0,
          top: -90,
          height: 89,
          marginBottom: -89,
        }}
        className="align-items-center"
      >
        <Col className="topBannerTextContainer">
          <Row style={{ color: "white" }}>
            <h3 className="topBannerHeader">SUMMER SALE!</h3>
          </Row>
          <Row style={{ color: "white" }}>
            <h4 className="topBannerSubHeader">up to 50% off!</h4>
          </Row>
        </Col>
        <Col className="topBannerButtonContainer">
          <Button
            className="topBannerButton btn-outline"
            variant="outline-primary"
          >
            shop now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBanner;
