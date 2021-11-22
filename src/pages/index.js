import React, { useContext } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import MailingList from "../components/MailingList";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";
import ProductInfo from "../components/ProductInfo";
import ProductPurchaseForm from "../components/ProductPurchaseForm";
import SearchBox from "../components/SearchBox";
import SubHeader from "../components/SubHeader";
import TopBanner from "../components/TopBanner";
import { ShoesContext } from "../context/ShoesProvider";

const Home = () => {
  const [boots] = useContext(ShoesContext);

  const bootsList = boots
    .filter((item) => item.title !== "Dylan Hiker Boot")
    .map((boot) => (
      <ProductCard
        name={boot.title}
        brand={boot.brand}
        price={boot.price}
        image={boot.image}
        sale={boot.sale}
        discount={boot.discount}
        lowStock={boot.lowStock}
      />
    ));

  return (
    <Container className="mainContainer">
      <Header />
      <Row>
        <SubHeader />
      </Row>
      <Container className="mainContentContainer">
        <Row className=" justify-content-center h-100">
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
              <Col className="carouselContainer">
                <ProductCarousel />
              </Col>
              <Col className="infoPurchaseContainer">
                <Row>
                  <ProductInfo product={boots[5]} />
                </Row>
                <Row>
                  <ProductPurchaseForm />
                </Row>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-center mb-4">
              <Col
                style={{
                  width: 200,
                  maxWidth: 200,
                  padding: 0,
                  marginRight: 10,
                }}
              >
                <h4>
                  More from <span style={{ color: "#00a2ff" }}>boots</span>
                </h4>
              </Col>
              <Col className="horizontalLineMain"></Col>
            </Row>
            <Row className="productCardContainer">{bootsList}</Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
};

export default Home;
