import React from 'react'
import { Link } from 'react-router-dom'

import './Trabalho.css'

function Trabalho(props) {
  return (
    <div className="Trabalho">
      <ul>
        <li><strong>Titulo:</strong> {props.trabalho.titulo}</li>
        <li><strong>Area:</strong> {props.trabalho.area}</li>
        <li><strong>Ano:</strong> {props.trabalho.ano}</li>
        <li><strong>Resumo:</strong> {props.trabalho.resumo}</li>
        <li> <Link to={`/trabalhos/${props.trabalho.identificador}`}>Detalhes</Link> </li>

      </ul>
      {/*<button onClick={props.removerUsuario}>&times;</button>*/}
    </div>
  )
}

export default Trabalho