import React from 'react';
import './App.css';
import { BrowserRouter as RouterDom, NavLink, Route, Routes } from 'react-router-dom';

import Trabalhos from './components/Trabalhos/Trabalhos'
import AdicionarTrabalho from './components/AdicionarTrabalho/AdicionarTrabalho';
import Home from './components/Home/Home';
import HomeField from './components/Home/HomeField';
import DetalhesTrabalho from './components/DetalhesTrabalho/DetalhesTrabalho'

function App() {
  return (
    <RouterDom>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Início</NavLink>
              </li>
              <li>
                <NavLink to="/trabalhos">Trabalhos Cadastrados</NavLink>
              </li>
              <li>
                <NavLink to="/adicionar">Adicionar Trabalho</NavLink>
              </li>
              <li>
                <NavLink to="/field">Home Field</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/trabalhos/:identificador" element={<DetalhesTrabalho />} />
            <Route path="/trabalhos" element={<Trabalhos />} />
            <Route path="/adicionar" element={<AdicionarTrabalho />} />
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
