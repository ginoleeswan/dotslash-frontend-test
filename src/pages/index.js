import React from "react";
import { Button, Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import MailingList from "../components/MailingList";
import ProductCarousel from "../components/ProductCarousel";
import ProductInfo from "../components/ProductInfo";
import ProductPurchaseForm from "../components/ProductPurchaseForm";
import SearchBox from "../components/SearchBox";
import SubHeader from "../components/SubHeader";
import TopBanner from "../components/TopBanner";

const Home = () => {
  return (
    <Container className="mainContainer">
      <Header />
      <Row>
        <SubHeader />
      </Row>
      <Container className="mainContentContainer">
        <Row>
          <Col className="sideContainer" sm>
            <Row>
              <SearchBox />
            </Row>
            <Row>
              <Advert />
            </Row>
            <Row>
              <MailingList />
            </Row>
          </Col>

          <Col className="infoContainer" lg>
            <Row>
              <TopBanner />
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Boots
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Dylan Hiker Boots</Breadcrumb.Item>
              </Breadcrumb>
            </Row>
            <Row>
              <Col>
                <ProductCarousel />
              </Col>
              <Col>
                <Row>
                  <ProductInfo />
                </Row>
                <Row>
                  <ProductPurchaseForm />
                </Row>
              </Col>
            </Row>
            <Row>more from boots</Row>
            <Row>boots list</Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
};

export default Home;
