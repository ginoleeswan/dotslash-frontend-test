import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
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
        <Col sm>
          <div className="tester1 bg-success">
            <p>hello</p>
          </div>
        </Col>
        <Col lg>
          <div className="tester1 bg-success">
            <TopBanner />
          </div>
        </Col>
      </Row>
      {/* <Container>
        <Button>Test Button</Button>
      </Container> */}
    </Container>
  );
};

export default Home;
