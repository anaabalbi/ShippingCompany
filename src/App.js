import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Perfil from './Pages/Perfil/Perfil';
import Busca from './Pages/Busca/Busca.jsx';
import Home from './Pages/Home/Home';
import Main from './Pages/FAQ/Main';
import Footer from './components/Footer/Footer';
import Cadastro from './Pages/Cadastro/Cadastro';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/DashboardPerfil/Dashboard.jsx';
import Blank from './Pages/Blank/Blank';
import Ajuda from './Pages/Ajuda/Ajuda';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path={'/faq'} element={<Main></Main>}></Route>
          <Route path='/busca/:code' element={<Busca></Busca>}></Route>
          <Route path='/cadastro' element={<Cadastro></Cadastro>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/perfil/:id' element={<Perfil />}>
            <Route index element={<Dashboard />} />
            <Route path='/perfil/:id/pedidos' element={<Blank />} />
            <Route path='/perfil/:id/ajuda' element={<Ajuda />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
