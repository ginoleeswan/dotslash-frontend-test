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
        <Col style={{ paddingLeft: 55 }}>
          <Row>
            <h3 style={{ color: "white" }}>SUMMER SALE!</h3>
          </Row>
          <Row style={{ color: "white" }}>
            <h4>up to 50% off!</h4>
          </Row>
        </Col>
        <Col style={{ paddingLeft: 140 }}>
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
