import React from 'react'
import { Formik } from 'formik'

import './Home.css'

function Home() {
    return <>
        <h1>Pagina Inicial</h1>
        <p>Bem vindo :)</p>

        <Formik 
        initialValues={{nome: '', email: '', nascimento: ''}}
        validate={(values)=>{
            const erros = {};

            if(!values.nome){
                erros.nome = 'Nome obrigatório'
            }
            if(!values.email){
                erros.email = 'email obrigatório'
            } else if (
                /** substituir pelo GET do codigo do autor ou orientador */
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
            ){
                erros.email = 'email inválido'
            }
            if(!values.nascimento){
                erros.nascimento = 'nascimento obrigatório'
            }
            return erros;
        }}
        onSubmit={(values) => {
            /** AQUI DVE SER CHAMADA O METODO QUE CHAMA A API PRA ENVIAR OS DADOS DO FORMULÁRIO*/
            alert(JSON.stringify(values));
        }}
        >
            {(props) =>(
                <form 
                noValidate
                onSubmit={props.handleSubmit}
                >
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input 
                    id="nome" 
                    name="nome" 
                    type="text"
                    value={props.values.nome} //captura o valor inicial com os values do metodo "initialValues" do Formik
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    className={props.errors.nome && props.touched.nome ? 'is-invalid' : ''}
                    />
                    {props.errors.nome && props.touched.nome ? <div className="invalid-feedback">{props.errors.nome}</div> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email" 
                    id="email" 
                    name="email" 
                    value={props.values.email} 
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    className={props.errors.email && props.touched.email ? 'is-invalid' : ''}
                    />
                    {props.errors.email && props.touched.email ? <div className="invalid-feedback">{props.errors.email}</div> : null}

                </div>
                <div className="form-group">
                    <label htmlFor="date">Data de Nascimento</label>
                    <input 
                    id="nascimento" 
                    name="nascimento" 
                    type="date"
                    value={props.values.nascimento} 
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    className={props.errors.nascimento && props.touched.nascimento ? 'is-invalid' : ''}
                    />
                    {props.errors.nascimento && props.touched.nascimento ? <div className="invalid-feedback">{props.errors.nascimento}</div> : null}

                </div>
                <button type="submit">Adicionar</button>
                </form>

            )}
        </Formik>
    </>
}

export default Home