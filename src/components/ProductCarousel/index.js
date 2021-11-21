import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { ShoesContext } from "../../context/ShoesProvider";

const ProductCarousel = () => {
  const [boots] = useContext(ShoesContext);

  return (
    <Container className="productCarouselContainer">
      <ImageGallery showPlayButton={false} items={boots[5].images} />
    </Container>
  );
};

export default ProductCarousel;
