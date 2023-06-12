import React from 'react'
import { Formik, useField } from 'formik'
import * as yup from 'yup';

import './Home.css'



const InputComponent = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="form-group">
        <label htmlFor={props.id}>{label}</label>
        <input
          {...field}
          {...props}
          className={meta.error && meta.touched ? 'is-invalid' : ''}
        />
        {meta.error && meta.touched ? (
          <div className="invalid-feedback">{meta.error}</div>
        ) : null}
      </div>
    );
};

const SelectComponent = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error && meta.touched ? 'is-invalid' : ''}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {meta.error && meta.touched ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );
};

const areaOptions = [
  { value: '', label: 'Selecione' },
  { value: 'MATEMATICA', label: 'Matematica, Calculo, Raciocínio Lógico' },
  { value: 'LETRAS', label: 'Linguagens, Literatura, Gramatica' },
  { value: 'COMPUTAÇÃO', label: 'Tecnologia, Ciencia de Dados, Inteligencia Artificial' },
  { value: 'ENGENHARIA', label: 'Engenharia, Produção, Inovação' },
  { value: 'EDUCACAO', label: 'Educação, Ensino, Aprendizagem' },
  { value: 'BIOLOGIA', label: 'Biologia, Ecossistema, Saude, Animal, Vegetal, Natureza' }

];



function HomeField() {

    const validationSchema = yup.object({
        titulo: yup
          .string()
          .required('O Título é obrigatório'),
        palavrasChave: yup
          .string()
          .required('Informe as palavras-chave')
          .min(7, 'infome no mínimo 3 palavras-chave'),
        codAutor: yup
          .string()
          .required('Informe o codigo do aluno autor'),
        codOrientador: yup
          .string()
          .required('Informe o código do professor orientador'),
        data: yup
          .date()
          .required('A data de publicação é obrigatória')
          .max(new Date(), 'Nao é possível cadastrar trabalhos que ainda serão aprovados'),
        area: yup
          .string()
          .required('Infome a área de pesquisa'),
        file: yup
          .mixed()
          .required('Inclua o Arquivo Digital com o Trabalho')
        
    });

    const handleSubmit = async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append('file', values.file);
      formData.append('trabalhoRequest', JSON.stringify(values));
  
      try {
        const response = await fetch('http://localhost:8000/digital-library', {
          method: 'POST',
          body: formData
        });
  
        // Verifique a resposta e realize as ações necessárias
        if (response.ok) {
          // A requisição foi bem-sucedida
          console.log('Arquivo enviado com sucesso!');
          resetForm();
        } else {
          // A requisição falhou
          console.error('Erro ao enviar arquivo:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    return <>

        <Formik 
        initialValues={{ titulo: '', area: '', palavrasChave: '', codAutor: '', 
          codOrientador: '', data: '', file: null}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}/*{values, {resetForm}handleSubmit => {*/
        

        /*const trabalhoRequest = values;
        trabalhoRequest.data = new Date(values.data).getFullYear();

        fetch('http://localhost:8000/digital-library', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(trabalhoRequest)
        })
        /** CAPTURAR O ERRO VINDO DA API */
        /*alert(JSON.stringify(values));
        resetForm();
        }}*/
        >
            {(props) =>(
                <form  noValidate onSubmit={props.handleSubmit}>
                
                <InputComponent id="titulo" name="titulo" type="text" label="Titulo"/>

                <InputComponent id="palavrasChave" name="palavrasChave" type="text" label="Palavras-Chave"/>

                <InputComponent id="codAutor" name="codAutor" type="text" label="Codigo Autor"/>

                <InputComponent id="codOrientador" name="codOrientador" type="text" label="Codigo do Orientador"/>
                
                <InputComponent id="data" name="data" type="date" label="Data de Publicacao"/>

                <SelectComponent
                  id="area"
                  name="area"
                  label="Area de Pesquisa"
                  options={areaOptions}
                />

                
                <button type="submit">Adicionar</button>
                </form>

            )}
        </Formik>
    </>
}

export default HomeField