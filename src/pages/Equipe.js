import React, { useState } from "react";
import "./Equipe.css";

const Equipe = () => {
  const teamMembers = [
    {
      name: "Karen",
      img: "./img/jadson002.jpeg",
      hoverImg: "./img/jadson001.jpeg",      // imagem exibida ao hover
      detailImg: "./img/karen-detail.jpeg",      // imagem para o modal
      description:
        "Oi, meu nome é Karen e sou estudante de Engenharia da Computação. Participo do LET.",
    },
    {
      name: "Jadson",
      img: "./img/jadson001.jpeg",
      hoverImg: "./img/jadson-hover.jpeg",
      detailImg: "./img/jadson-detail.jpeg",
      description:
        "Oi, meu nome é Jadson e sou estudante de Engenharia da Computação. Participo do LET.",
    },
    {
      name: "Daniel",
      img: "./img/jadson003.jpeg",
      hoverImg: "./img/daniel-hover.jpeg",
      detailImg: "./img/daniel-detail.jpeg",
      description:
        "Oi, meu nome é Daniel e sou estudante de Engenharia da Computação. Participo do LET.",
    },
    {
      name: "Joshua",
      img: "./img/jadson006.jpeg",
      hoverImg: "./img/joshua-hover.jpeg",
      detailImg: "./img/joshua-detail.jpeg",
      description:
        "Oi, meu nome é Joshua e sou estudante de Engenharia da Computação. Participo do LET.",
    },
    {
      name: "Renata",
      img: "./img/jadson004.jpeg",
      hoverImg: "./img/renata-hover.jpeg",
      detailImg: "./img/renata-detail.jpeg",
      description:
        "Oi, meu nome é Renata e sou estudante de Engenharia da Computação. Participo do LET.",
    },
    {
      name: "Samuel",
      img: "./img/jadson005.jpeg",
      hoverImg: "./img/samuel-hover.jpeg",
      detailImg: "./img/jadson001.jpeg",
      description:
        "Oi, meu nome é Samuel e sou estudante de Engenharia da Computação. Participo do LET.",
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  // Componente para trocar a imagem ao passar o mouse
  const HoverImage = ({ normal, hover, alt }) => {
    const [src, setSrc] = useState(normal);
    return (
      <img
        src={src}
        alt={alt}
        onMouseEnter={() => setSrc(hover)}
        onMouseLeave={() => setSrc(normal)}
        className="profile-img"
      />
    );
  };

  return (
    <div className="equipe">
      <div className="grid-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="grid-item">
            <HoverImage
              normal={member.img}
              hover={member.hoverImg}
              alt={member.name}
            />
          </div>
        ))}
      </div>

      {/* Linha horizontal de nomes */}
      <div className="names-line">
        {teamMembers.map((member, index) => (
          <button
            key={index}
            className="name-button"
            onClick={() => openModal(member)}
          >
            {member.name}
          </button>
        ))}
      </div>

      {/* Modal para exibir detalhes do membro */}
      {selectedMember && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={selectedMember.detailImg}
                  alt={selectedMember.name}
                />
              </div>
              <div className="modal-text">
                <p>{selectedMember.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Equipe;
