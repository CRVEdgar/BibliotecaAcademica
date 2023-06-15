import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import 'bootswatch/dist/minty/bootstrap.css'
import logo from './logo.jpg';
import biblioteca from './biblioteca-digital-ifma.jpg' 
import './Inicio.css'

import Accordion from "../Accordions/Accordion";
import Busca from "../Busca/Busca";

function Inicio() {

    const [titulo, setTitulo] = useState('')
    const [palavrasChave, setPalavrasChave] = useState('')
    const [resumo, setResumo] = useState('')
    const [textoInformado, setTextoInformado] = useState('')


  const onSubmitHandler = event => {
    event.preventDefault()

    const filter = { titulo, palavrasChave, resumo, textoInformado }

    fetch('http://localhost:8000/digital-library/filter', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filter)
    })
      //.then(resposta => resposta.json())
      .then(dados => {
        if(dados.ok){
          /*setTitulo('')
          setArea('')
          setResumo('')*/
          alert('Trabalho cadastrado com sucesso')
        }
        /*props.adicionarTrabalho(dados)*/
      })
  }

    return (
    <>


    <div className="container imagensInicio alinhamento">
        <div className="imagemEsquerda" id="tamanhoDir">
            <img src={logo} alt="Imagem Esquerda" />
        </div>
        <h2> <strong>Biblioteca Digital César Lattes </strong></h2>
        <div className="imagemDireita" id="tamanhoEsq">
            <img src={biblioteca} alt="Imagem Direita" />
        </div>
    </div>

    <div className="container Inicio">
        <h3 className="titulo">Acervo Digital de Trabalhos Acadêmicos - IFMA-MTC</h3>
        <div className="header">

        <div className="jumbotron" >

            <div className="row ">
                <br />
                <form onSubmit={onSubmitHandler} className="form-horizontal col-md-12 form-group form-group-lg">
                    <div className="col-md-12 searchbox">
                    <Busca></Busca>
                    </div>
                </form>
                
               {/* <form onSubmit={onSubmitHandler} className="form-horizontal col-md-12 form-group form-group-lg">
                    <div className="col-md-12 searchbox">
                        <div className="col-md-11">
                            <input type="text" className="form-control" placeholder="Buscar no ADTA-IFMA" name="query" id="tequery" size="25" 
                            value={textoInformado}
                            onChange={event => setTextoInformado(event.target.value)}
                            />
                        </div>
                        <div className="col-md-1">
                            <button type="submit">Buscar</button>
                        </div>
                    </div>
    </form>*/}

                <h3>Documentos depositados</h3>

                <div className="accordion" id="center">
                    <Accordion/>
                </div>
            
            </div>

        </div>
        </div>
    </div>

    </>
    );
}

export default Inicio