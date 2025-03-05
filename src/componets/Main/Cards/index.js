import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = () => {
  const cardData = [
    {
      title: "Primeiro Caderno",
      description: "Saiba mais sobre o Primeiro Caderno do LET.",
      img: "./img/1.png",
      src: "/caderno de desenho volume 1.jpg", // Link para a página do PDF
    },
    {
      title: "Ciclo de Palestras",
      description: "Descubra o que está planejado para o Ciclo de Palestras.",
      img: "./img/1.png",
      link: "/ciclo-de-palestras",
    },
    {
      title: "Expo 2025",
      description: "Tudo sobre a Exposição 2025.",
      img: "./img/1.png",
      link: "/expo-2025",
    },
    {
      title: "Publicações",
      description: "Confira nossas publicações mais recentes.",
      img: "./img/1.png",
      link: "/publicacoes",
    },
  ];

  return (
    <div className="lugar">
      <section className="topo">
        <div className="fundo">
          <img src="./img/01.png" alt="fundo"/>
        </div>
        <div className="cards-container">
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <h3 className="marquee">{card.title}</h3>
              <img src={card.img} alt={card.title} />
              <p>{card.description}</p>
              <Link to={card.link} className="card-link">
                Saiba Mais
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cards;
