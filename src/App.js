import React from 'react';
import './App.css';
import { BrowserRouter as RouterDom, NavLink, Route, Routes } from 'react-router-dom';

import Trabalhos from './components/Trabalhos/Trabalhos'
import AdicionarTrabalho from './components/AdicionarTrabalho/AdicionarTrabalho';
import Home from './components/Home/Home';
import Inicio from './components/Home/Inicio';
import HomeField from './components/Home/HomeField';
import DetalhesTrabalho from './components/DetalhesTrabalho/DetalhesTrabalho'
import Detalhes from './components/DetalhesTrabalho/Detalhes';
import ViewDetalhes from './components/DetalhesTrabalho/ViewDetalhes';

import logo from './Imagens/logo-if.png'; 

function App() {
  return (
    <RouterDom>
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
              <div className="logo-container">
                <img src={logo} className="imgLogo" alt="Logo" />
              </div>
              <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <NavLink to="/" exact><strong>Início</strong></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/trabalhos"><strong>Trabalhos Cadastrados</strong></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/adicionar"><strong>Adicionar Trabalho</strong></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/field"><strong>Home Field</strong></NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<Inicio />} />
            <Route path="/trabalhos/:identificador" element={<DetalhesTrabalho />} />
            <Route path="/trabalhos" element={<Trabalhos />} />
            <Route path="/adicionar" element={<AdicionarTrabalho />} />
            <Route path="/detalhes" element={<Detalhes/>} />
            <Route path="/viewdetalhes/:identificador" element={<ViewDetalhes/>} />
            <Route path="/field" element={<HomeField />} />
            <Route path="*" element={<PaginaoEncontrada />} />

            {/*<Route path="/" exact>
              <Home />
            </Route>
            <Route path="/trabalhos">
              <Trabalhos />
            </Route>
            <Route path="/adicionar">
              <AdicionarTrabalho />
            </Route>
            <Route path="*">
              <h1>404</h1>
              <p>Página não encontrada!</p>
              </Route>
            <Route path="*">
              <PaginaoEncontrada></PaginaoEncontrada>
            </Route>
  */}
          </Routes>
        </main>
      </div>
    </RouterDom>
  );
}

function PaginaoEncontrada(){
  return<>
  <h1>404</h1>
  <p>Página nao encontrada</p>
  </>
}

export default App;
