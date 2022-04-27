import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Busca from './Pages/Busca/Busca.jsx';
import Home from './Pages/Home/Home.jsx';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Router>
        <Header></Header>

        <Routes>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path='/busca/:code' element={<Busca></Busca>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
