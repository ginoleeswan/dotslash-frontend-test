import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

const Home = () => {
  return (
    <Container>
      <Header />
      <Row>
        <SubHeader />
      </Row>
      {/* <Container>
        <Button>Test Button</Button>
      </Container> */}
    </Container>
  );
};

export default Home;
