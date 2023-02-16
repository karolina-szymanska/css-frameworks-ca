import React from "react";
import Carousel from "react-bootstrap/Carousel";

// the images for carousel
import carouselImage1 from "../../images/carousel/carousel-1.jpg";
import carouselImage2 from "../../images/carousel/carousel-2.jpg";
import carouselImage3 from "../../images/carousel/carousel-3.jpg";

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImage1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImage3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;