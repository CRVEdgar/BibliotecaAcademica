import React from 'react';
import { useLocation } from 'react-router-dom';

function Detalhes() {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div>
      <h1>Detalhes</h1>
      <p>Identificador: {data.identificador}</p>
      <p>Título: {data.titulo}</p>
      <p>Área: {data.area}</p>
      <p>Resumo: {data.resumo}</p>
      <p>Autor: {data.autor}</p>
      <p>Orientador: {data.orientador}</p>
      <p>Ano: {data.ano}</p>
      <p>Palavras-chave: {data.palavrasChave}</p>
    </div>
  );
}

export default Detalhes;
