import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchPage } from './Pages/search/SearchPage.jsx';
import Home from './Pages/home/PageHome';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <>
      <Router>
        <Header></Header>

        <Routes>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path='/search/:id' element={<SearchPage></SearchPage>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
