import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Busca from './Pages/Busca/Busca.jsx';
import Home from './Pages/Home/Home';

import Footer from './components/Footer/Footer';
import HeaderHome from './components/HeaderHome/HeaderHome.js';

function App() {
  return (
    <>
      <Router>
        <HeaderHome></HeaderHome>
        <Routes>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path='/busca/:code' element={<Busca></Busca>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
