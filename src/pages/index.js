import React from "react";
import { Button, Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Advert from "../components/Advert";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import MailingList from "../components/MailingList";
import SearchBox from "../components/SearchBox";
import SubHeader from "../components/SubHeader";
import TopBanner from "../components/TopBanner";

const Home = () => {
  return (
    <Container>
      <Header />
      <Row>
        <SubHeader />
      </Row>

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
        </Col>
      </Row>
      {/* <Container>
        <Button>Test Button</Button>
      </Container> */}
    </Container>
  );
};

export default Home;
