import React, { useState } from 'react'

import './AdicionarTrabalho.css'

function AdicionarTrabalho(/*props*/) {
  
  const [titulo, setTitulo] = useState('')
  const [area, setArea] = useState('')
  const [resumo, setResumo] = useState('')
  const [file, setFile] = useState('')


  const onSubmitHandler = event => {
    event.preventDefault()

    const trabalho = { titulo, area, resumo }

    fetch('http://localhost:8000/digital-library/endpointtest/front', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trabalho)
    })
      .then(resposta => resposta.json())
      .then(dados => {
        setTitulo('')
        setArea('')
        setResumo('')
        /*props.adicionarTrabalho(dados)*/
      })
  }

  return (
    <div className="AdicionarTrabalho">
      <h2>Adicionar Trabalho Acadêmico</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="Linha">
          <div className="Coluna">
            <label>Titulo</label>
            <input
              type="text"
              name="titulo"
              value={titulo}
              onChange={event => setTitulo(event.target.value)}
              required>
            </input>
          </div>
          <div className="Coluna">
            <label>Area</label>
            <input
              type="text"
              name="area"
              value={area}
              onChange={event => setArea(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <label>Resumo</label>
            <input
              type="text"
              name="resumo"
              value={resumo}
              onChange={event => setResumo(event.target.value)}
              required>
            </input>
           {/* <input 
              type="file" 
              name="file" 
              accept=".pdf">
  </input> */}
          </div>
        </div>
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
}

export default AdicionarTrabalho