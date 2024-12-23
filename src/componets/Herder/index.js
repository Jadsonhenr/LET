import React from "react";
import "./herder.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://via.placeholder.com/150" alt="Logo" />
        <div className="LET">
            <span >LET</span>
            <span >LOBORATORIO ...</span>
        </div>
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#services">Serviços</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contato</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
};

export default Header;
