import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


function DetalhesTrabalho() {
  const { identificador } = useParams()
  

  const [trabalho, setTrabalho] = useState({})

  useEffect(() => {
    fetch(`http://localhost:8000/digital-library/identificador/${identificador}`)
      .then(resposta => resposta.json())
      .then(dados => {
        if (dados) {
          setTrabalho({
            identificador: dados.identificador,
            titulo: dados.titulo,
            area: dados.area,
            resumo: dados.resumo,
            autor: dados.nomeAutor,
            orientador: dados.nomeOrientador,
            ano: dados.ano,
            palavrasChave: dados.palavrasChave
          })
        }
      })
  }, [identificador])

  if (trabalho.identificador !== undefined) {
    return <>
      <h1>{trabalho.titulo}</h1>
      <h4>Autor: {trabalho.autor}</h4>
      <h4>Orientador: {trabalho.orientador}</h4>
      <h4>Ano da Publicação: {trabalho.ano}</h4>
      <h3>Resumo</h3>
      <p>{trabalho.resumo}</p>

      <h4>Palavras-chave: {trabalho.palavrasChave}</h4>

      {/*<img src={usuario.foto} alt={usuario.nome} />*/}

      <Link to="/trabalhos">Voltar</Link>
    </>
  }

  return <>
    <h1>Trabalho não encontrado!</h1>
    <Link to="/trabalhos">Voltar</Link>
  </>
}

export default DetalhesTrabalho;