import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componets/Herder';

import Cards from './componets/Main/Cards';
import Footer from './componets/Footer';
import PrimeiroCaderno from './pages/PrimeiroCaderno';
import CicloDePalestras from './pages/CicloDePalestras';
import Expo2025 from './pages/Expo2025';
import Publicacoes from './pages/Publicacoes';
import Equipe from './pages/Equipe'; // Certifique-se de que o caminho está correto
import Servico3D from './pages/Servico3D'
import Let from './pages/let';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <Header>
      
      </Header>
      <Routes>
        <Route path="/" element={
          <>
            <Cards />
          </>
        } />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/Servico3D" element={<Servico3D />} />
        <Route path="/primeiro-caderno" element={<PrimeiroCaderno />} />
        <Route path="/ciclo-de-palestras" element={<CicloDePalestras />} />
        <Route path="/expo-2025" element={<Expo2025 />} />
        <Route path="/publicacoes" element={<Publicacoes />} />
        <Route path='/let' element={<Let/>}/>
        <Route path='/contact' element={<Contato/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
