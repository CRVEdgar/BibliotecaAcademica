import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


function AccordionItem({ title, endpoint, inputType }) {
    const [searchParam, setSearchParam] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Obtém a função navigate

    const [titulo, setTitulo] = useState('')
    const [palavrasChave, setPalavrasChave] = useState('')
    const [resumo, setResumo] = useState('')
    const [textoInformado, setTextoInformado] = useState('')



const handleSearch = () => {
  // Realiza a busca na API com base no parâmetro searchParam e endpoint específico
  
  setIsSearching(true);
  setShowNoResultsMessage(false);
  setErrorMessage('');

    //setTextoInformado(searchParam);
  const filter = { titulo, palavrasChave, resumo, textoInformado }

    fetch('http://localhost:8000/digital-library/filter', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filter)
    })
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
    console.log("MODIFICANDO O VALOR DO INPUT")
    setSearchParam(event.target.value);
    setTextoInformado(event.target.value);
  };

  return (
    <div >
      
        <div >
          <div >
              <input
                type="text"
                value={textoInformado}
                onChange={handleInputChange}
                placeholder="Buscar no ADTA-IFMA"
              />
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
      
    </div>
  );
}

function Busca() {
  return (
    <div >
      <AccordionItem
        title="Buscar por Ano"
        endpoint="http://localhost:8000/digital-library/ano/${param}"
        inputType="text"
      />
      
      
    </div>
  );
}

export default Busca;
