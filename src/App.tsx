import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from "./components/estaticos/navbar/Navbar";
import { About } from './paginas/about/about';
import { Home } from "./paginas/home/home";
import Login from './paginas/login/Login';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
