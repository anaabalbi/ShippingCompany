import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Busca from './Pages/Busca/Busca.jsx';
import Home from './Pages/Home/Home';

import Footer from './components/Footer/Footer';
import HeaderHome from './components/HeaderHome/HeaderHome.js';
import Cadastro from './Pages/Cadastro/Cadastro'
import Login from './Pages/Login/Login'

function App() {
  return (
    <>
      <Router>
        <HeaderHome></HeaderHome>
        <Routes>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path='/busca/:code' element={<Busca></Busca>}></Route>
          <Route path='/cadastro' element={<Cadastro></Cadastro>}/>
          <Route path='/login' element={<Login></Login>}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
