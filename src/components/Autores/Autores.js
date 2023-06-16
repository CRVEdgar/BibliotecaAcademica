import React, { useState, useEffect } from 'react'

import Trabalho from '../Trabalho/Trabalho'
import Autor from './Autor'

function Autores() {

  const [autores, setAutores] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/digital-library/all')
    .then(resposta => resposta.json())
    .then(dados => {
      if(dados){
        const autores = dados.map(trabalho => ({
          autor: trabalho.nomeAutor,
          titulo: trabalho.titulo,
          area: trabalho.area,
          ano: trabalho.ano
        
        }))
  
        setAutores(autores)

      }else{
        window.alert('Nao há Autores cadastrados')
      }
      
    })
  }, [])

  return (
    <>

      {autores.map(trabalho => (
        <Autor key={trabalho.titulo}
          trabalho={trabalho}
        />
      ))}
    </>
  )
}

export default Autores