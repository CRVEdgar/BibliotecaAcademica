import React, { useState, useEffect } from 'react'

//import AdicionarTrabalho from '../AdicionarTrabalho/AdicionarTrabalho'
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

  /** FUNÇÃO  REMOVIDA PARA POST DIRETO PELO COMPONENTE*/
  /*
  const adicionarTrabalho = trabalho => {
    setTrabalhos(trabalhosAtuais => [...trabalhosAtuais, trabalho])
  }
  */

  /** TRANSFORMAR EM DOWNLOAD */
  /*
  const removerUsuario = usuario => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      fetch(`https://reqres.in/api/users/${usuario.id}`, {
        method: 'DELETE'
      })
        .then(resposta => {
          if (resposta.ok) {
            setUsuarios(usuarios.filter(x => x.id !== usuario.id))
          }
        })
    }
  }
  */

  return (
    <>
      {/*<AdicionarTrabalho adicionarTrabalho={adicionarTrabalho} />*/}

      {trabalhos.map(trabalho => (
        <Trabalho key={trabalho.identificador}
          trabalho={trabalho}
          //removerUsuario={() => removerUsuario(usuario)}
        />
      ))}
    </>
  )
}

export default Trabalhos