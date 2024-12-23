import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const images = [
    "https://via.placeholder.com/1920x1080?text=Imagem+1",
    "https://via.placeholder.com/1920x1080?text=Imagem+2",
    "https://via.placeholder.com/1920x1080?text=Imagem+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-slide">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
        />
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
