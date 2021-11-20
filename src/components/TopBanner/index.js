import React from "react";
import { Container } from "react-bootstrap";
import topBanner from "../../images/TopBanner.png";

const TopBanner = () => {
  return (
    <Container className="topBannerContainer">
      <img src={topBanner} alt="top banner" />
    </Container>
  );
};

export default TopBanner;
