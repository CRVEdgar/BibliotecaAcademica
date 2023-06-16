import React from 'react'

import './Autor.css'

function Autor(props) {
  

  return (
    <div className="Autor">
      <ul>
        <li><strong>Autor:</strong> {props.trabalho.autor}</li>
        <li><strong>Titulo da obra cadastrada:</strong> {props.trabalho.titulo}</li>
        <li><strong>Area de Pesquisa:</strong> {props.trabalho.area}</li>
        <li><strong>Ano de Publicacao:</strong> {props.trabalho.ano}</li>
        
      </ul>

    </div>
  )
}

export default Autor