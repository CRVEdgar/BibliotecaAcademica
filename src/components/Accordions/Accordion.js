import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './Accordions.css'

function AccordionItem({ title, endpoint, inputType }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchParam, setSearchParam] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Obtém a função navigate

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };


const handleSearch = () => {
  // Realiza a busca na API com base no parâmetro searchParam e endpoint específico
  const apiUrl = endpoint.replace('${param}', searchParam);
  console.log("endpoint chamado: ", apiUrl)
  setIsSearching(true);
  setShowNoResultsMessage(false);
  setErrorMessage('');

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      setSearchResults(data);
      setIsSearching(false);

      if (data.length === 0) {
        setShowNoResultsMessage(true);
      }else {
        navigate('/detalhes', { state: { data } });
      }
      // Atualizar a rota e passar os dados para o componente de detalhes
      
    })
    .catch(error => {
      console.error('Ocorreu um erro ao realizar a busca:', error);
      setIsSearching(false);
      setErrorMessage('Ocorreu um erro ao realizar a busca. Por favor, tente novamente.');
      
    });
};


  const handleInputChange = event => {
    setSearchParam(event.target.value);
  };

  return (
    <div className="accordion-item accordionsbox ">
      <h2 className="accordion-header">
        <button
        //style={{ "--bs-accordion-border-color": "transparent" }}
          className={`accordion-button${isExpanded ? ' expanded' : ''}`}
          type="button"
          onClick={handleToggle}
        >
          {title}
        </button>
      </h2>
      {isExpanded && (
        <div className="accordion-collapse">
          <div className="accordion-body">
            {inputType === 'text' ? (
              <input
                type="text"
                value={searchParam}
                onChange={handleInputChange}
              />
            ) : (
              <select value={searchParam} onChange={handleInputChange} id="selectAreas">
                <option value="">Selecione</option>
                <option value="MATEMATICA">Matematica, Calculo, Raciocínio Lógico</option>
                <option value="LETRAS">Linguagens, Literatura, Gramatica</option>
                <option value="COMPUTAÇÃO">Tecnologia, Ciencia de Dados, Inteligencia Artificial</option>
                <option value="ENGENHARIA">Engenharia, Produção, Inovação</option>
                <option value="EDUCACAO">Educação, Ensino, Aprendizagem</option>
                <option value="BIOLOGIA">Biologia, Ecossistema, Saude, Animal, Vegetal, Natureza</option>
                
              </select>
            )}
            <div id="rlzBuscar">
              <button type="button" onClick={handleSearch}>
                Realizar busca
              </button>
            </div>
            {isSearching ? (
              <p>Realizando busca...</p>
            ) : showNoResultsMessage ? (
              <p>Nenhum resultado encontrado.</p>
            ) : errorMessage ? (
              <p>{errorMessage}</p>
            ) : searchResults.length > 0 ? (
              <ul>
                {searchResults.map(result => (
                  <li key={result.id}>{result.name}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion" id="accordionsButton">
      <AccordionItem
        title="Buscar por Ano"
        endpoint="http://localhost:8000/digital-library/ano/${param}"
        inputType="text"
      />
      <AccordionItem
        title="Buscar por Area"
        endpoint="http://localhost:8000/digital-library/area/?area=${param}"
        inputType="select"
      />
      
    </div>
  );
}

export default Accordion;
