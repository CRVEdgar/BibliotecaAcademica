import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

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
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
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
              <select value={searchParam} onChange={handleInputChange}>
                <option value="">Selecione uma opção</option>
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
              </select>
            )}
            <button type="button" onClick={handleSearch}>
              Realizar busca
            </button>
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
    <div className="accordion">
      <AccordionItem
        title="Accordion Item #1"
        endpoint="http://localhost:8000/digital-library/ano/${param}"
        inputType="text"
      />
      <AccordionItem
        title="Accordion Item #2"
        endpoint="http://localhost:8000/digital-library/area/?area=${param}"
        inputType="text"
      />
      <AccordionItem
        title="Accordion Item #3"
        endpoint="http://localhost:8000/digital-library/opcao/${param}"
        inputType="select"
      />
    </div>
  );
}

export default Accordion;
