import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import './Detalhes.css'


function ViewDetalhes() {
  const { identificador } = useParams()

  const [trabalho, setTrabalho] = useState({})
  

  useEffect(() => {
    fetch(`http://localhost:8000/digital-library/identificador/${identificador}`)
      .then(resposta => resposta.json())
      .then(dados => {
        if (dados) {
          setTrabalho({
            identificador: dados.identificador,
            titulo: dados.titulo,
            area: dados.area,
            resumo: dados.resumo,
            autor: dados.nomeAutor,
            orientador: dados.nomeOrientador,
            ano: dados.ano,
            palavrasChave: dados.palavrasChave
          })
        }
      })
  }, [identificador])

  if (trabalho.identificador !== undefined) {
    return <>
      {/*<h1>{trabalho.titulo}</h1>
      <h4>Autor: {trabalho.autor}</h4>
      <h4>Orientador: {trabalho.orientador}</h4>
      <h4>Ano da Publicação: {trabalho.ano}</h4>
      <h3>Resumo</h3>
      <p>{trabalho.resumo}</p>
  <h4>Palavras-chave: {trabalho.palavrasChave}</h4>*/}

      {/*<img src={usuario.foto} alt={usuario.nome} />*/}
      <div className="justify-tex" id="tabelaTrabalho">
        <h3>{trabalho.titulo}</h3>
      </div>
      <div className="tabelaArea">
        <table className="table itemDisplayTable">
            <tr><td className="metadataFieldLabel"><strong>Título:&nbsp;</strong></td><td className="metadataFieldValue"> {trabalho.titulo} </td></tr>
            <tr><td className="metadataFieldLabel"><strong>Autor(es):&nbsp;</strong></td><td class="metadataFieldValue"> {trabalho.autor} </td></tr>
            <tr><td className="metadataFieldLabel"><strong>Palavras-chave:&nbsp;</strong></td><td class="metadataFieldValue"> {trabalho.palavrasChave} </td></tr>
            <tr><td className="metadataFieldLabel"><strong>Ano da publicação:&nbsp;</strong></td><td class="metadataFieldValue"> {trabalho.ano} </td></tr>
            <tr><td className="metadataFieldLabel"><strong>Orientador(a):&nbsp;</strong></td><td class="metadataFieldValue"> {trabalho.orientador} </td></tr>
            <tr><td className="metadataFieldLabel"><strong>Resumo:&nbsp;</strong></td><td class="metadataFieldValue"> <p className="justify-text">{trabalho.resumo}</p> </td></tr>
            <tr><td className="metadataFieldLabel"><strong>URI:&nbsp;</strong></td><td class="metadataFieldValue"><a href="http://localhost:8000/digital-library/identificador/${identificador}" >  `http://localhost:8000/digital-library/identificador/{identificador}` </a></td></tr>
            <tr><td className="metadataFieldLabel"><strong>Area de Pesquisa:</strong></td><td class="metadataFieldValue"> {trabalho.area} <br/> </td></tr>
        </table>
      </div>
      
        <br/>
        <div className="panel panel-info"><div class="panel-heading">Arquivos associados a este item:</div>
            <table className="table panel-body"><tr><th id="t1" class="standard">Arquivo</th>
            <th id="t2" className="standard">Descrição</th>
            <th id="t3" className="standard">Tamanho</th><th id="t4" class="standard">Formato</th><th>&nbsp;</th></tr>
            <tr><td headers="t1" claclassNamess="standard"><a target="_blank" href="/bitstream/123456789/4178/1/Texto.pdf">Texto.pdf</a></td><td headers="t2" class="standard"></td><td headers="t3" class="standard">1,36 MB</td><td headers="t4" class="standard">PDF</td><td class="standard" align="center"><a class="btn btn-primary" target="_blank" href="/bitstream/123456789/4178/1/Texto.pdf">Visualizar/Abrir</a></td></tr><tr><td headers="t1" class="standard"><a target="_blank" href="/bitstream/123456789/4178/2/Termo%20de%20Autoriza%c3%a7%c3%a3o.pdf">Termo de Autorização.pdf</a></td><td headers="t2" class="standard"></td><td headers="t3" class="standard">82,83 kB</td><td headers="t4" class="standard">Adobe PDF</td><td class="standard" align="center"><a class="btn btn-primary" target="_blank" href="/bitstream/123456789/4178/2/Termo%20de%20Autoriza%c3%a7%c3%a3o.pdf">Visualizar/Abrir</a></td></tr></table>
        </div>

    </>
  }

  return <>
    <h1>Trabalho não encontrado!</h1>
    <Link to="/detalhes">Voltar</Link>
  </>
}

export default ViewDetalhes;