import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/estaticos/navbar/Navbar";
import { About } from './paginas/about/about';
import { Home } from "./paginas/home/home";

function App() {
  return (
    <Router>  // Orquestrador - que monta a página que o usuário irá utilizar
      <Navbar />
      <Routes>  // Lista de rotas da aplicação
        <Route path='/' element={<Home />} /> // Rota
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
