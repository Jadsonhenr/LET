import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = () => {
  const cardData = [
    {
      title: "Primeiro Caderno",
      description: "Saiba mais sobre o Primeiro Caderno do LET.",
      img: "./img/1.png",
      link: "/primeiro-caderno", // Link para a página de "Primeiro Caderno"
    },
    {
      title: "Ciclo de Palestras",
      description: "Descubra o que está planejado para o Ciclo de Palestras.",
      img: "./img/1.png",
      link: "/ciclo-de-palestras", // Link para a página de "Ciclo de Palestras"
    },
    {
      title: "Expo 2025",
      description: "Tudo sobre a Exposição 2025.",
      img: "./img/1.png",
      link: "/expo-2025", // Link para a página de "Expo 2025"
    },
    {
      title: "Publicações",
      description: "Confira nossas publicações mais recentes.",
      img: "./img/1.png",
      link: "/publicacoes", // Link para a página de "Publicações"
    },
  ];

  return (
    <>
      <h2>1º ano do LET</h2>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Link to={card.link} className="card-link">
              Saiba Mais
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
