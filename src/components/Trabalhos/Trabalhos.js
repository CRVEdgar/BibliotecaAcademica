import React, { useState, useEffect } from 'react'

import Trabalho from '../Trabalho/Trabalho'

function Trabalhos() {

  const [trabalhos, setTrabalhos] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/digital-library/all')
    .then(resposta => resposta.json())
    .then(dados => {
      if(dados){
        const trabalhos = dados.map(trabalho => ({
          identificador: trabalho.identificador,
          titulo: trabalho.titulo,
          area: trabalho.area,
          ano: trabalho.ano,
          resumo: trabalho.resumo
        }))
  
        setTrabalhos(trabalhos)

      }else{
        window.alert('Nao há Trabalhos Acadêmicos cadastrados')
      }
      
    })
  }, [])

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