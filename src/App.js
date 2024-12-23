import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componets/Herder';
import Carousel from './componets/Main';
import Cards from './componets/Main/Cards';
import Footer from './componets/Footer';
import PrimeiroCaderno from './pages/PrimeiroCaderno';
import CicloDePalestras from './pages/CicloDePalestras';
import Expo2025 from './pages/Expo2025';
import Publicacoes from './pages/Publicacoes';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <Cards />
          </>
        } />
        <Route path="/primeiro-caderno" element={<PrimeiroCaderno />} />
        <Route path="/ciclo-de-palestras" element={<CicloDePalestras />} />
        <Route path="/expo-2025" element={<Expo2025 />} />
        <Route path="/publicacoes" element={<Publicacoes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
