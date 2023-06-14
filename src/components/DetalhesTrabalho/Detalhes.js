import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import './Detalhes.css'

function Detalhes() {
  const location = useLocation();
  const {data}  = location.state;

  const maxResumoLength = 200;

  
  const limitarResumo = (resumo) => {
    if (resumo.length <= maxResumoLength) {
      return resumo;
    } else {
      return resumo.substring(0, maxResumoLength) + ' (...)';
    }
  };

  return (


  <div >
    {data.map((item) =>(
      <div key={item.identificador} className="Detalhes">
        <ul>
          <li><strong>Titulo:</strong> {item.titulo}</li>
          <li><strong>Area:</strong> {item.area}</li>
          <li><strong>Ano:</strong> {item.ano}</li>
          <li><strong>Resumo:</strong> {limitarResumo(item.resumo)} </li>
          <li> <Link to={`/viewdetalhes/${item.identificador}`}>Detalhes</Link> </li>

        </ul>
      </div>
    ))}
    
  </div>

  );
}

export default Detalhes;
