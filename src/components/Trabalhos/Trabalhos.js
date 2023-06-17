import React, { useState, useEffect } from 'react'

import Trabalho from '../Trabalho/Trabalho'
import PaginaoEncontrada from './PaginaoEncontrada';

function Trabalhos() {

  const [trabalhos, setTrabalhos] = useState([])

  const [erroConexao, setErroConexao] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/digital-library/all')
      .then(resposta => resposta.json())
      .then(dados => {
        if (dados) {
          const trabalhos = dados.map(trabalho => ({
            identificador: trabalho.identificador,
            titulo: trabalho.titulo,
            area: trabalho.area,
            ano: trabalho.ano,
            resumo: trabalho.resumo
          }));

          setTrabalhos(trabalhos);
        } else {
          window.alert('Não há Trabalhos Acadêmicos cadastrados');
        }
      })
      .catch(error => {
        console.error('Erro ao estabelecer conexão com o servidor:', error);
        setErroConexao(true);
      });
  }, []);

  if (erroConexao) {
    return <PaginaoEncontrada />;
  }
  

  return (
    <>

      {trabalhos.map(trabalho => (
        <Trabalho key={trabalho.identificador}
          trabalho={trabalho}
        />
      ))}
    </>
  )
}

export default Trabalhos