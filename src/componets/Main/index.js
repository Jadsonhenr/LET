import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const images = [
    "https://via.placeholder.com/1920x1080?text=Imagem+1",
    "https://via.placeholder.com/1920x1080?text=Imagem+2",
    "./img/5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Muda para o próximo slide automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 segundos

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, [images.length]);

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
