import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchPage } from './Pages/Busca/Busca';
import Home from './Pages/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Router>
        <Header></Header>

        <Routes>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route
            path='/busca/:code'
            element={<SearchPage></SearchPage>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
