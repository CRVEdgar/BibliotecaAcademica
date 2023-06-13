import React, { useState } from 'react'
import { Formik, useField } from 'formik'
import * as yup from 'yup';


import './HomeField.css'
import '../AdicionarTrabalho/AdicionarTrabalho.css'
import 'bootswatch/dist/minty/bootstrap.css'

import DangerAlert from '../Alerts/DangerAlert';
import SuccessAlert from '../Alerts/SuccessAlert';

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
    <div className="form-group" id="idcbx">
      <label htmlFor={props.id}>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error && meta.touched ? 'is-invalid' : ''}
        id="comboBox"
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

const FileComponent = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    setValue(file);
  };

  return (
    <div className="inputSp">
      <label htmlFor={props.id}>{label}</label>
      <input
        type="file"
        onChange={handleChange}
        onBlur={field.onBlur}
        className={meta.error && meta.touched ? 'is-invalid' : ''}
      />
      {meta.error && meta.touched ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );
};

const TextAreaComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{label}</label>
      <textarea
        {...field}
        {...props}
        className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`}
        rows="10"
      />
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
          .required('Inclua o Arquivo Digital com o Trabalho'),
        resumo: yup
          .mixed()
          .required('Preencha o resumo do seu trabalho')
        
    });

    const [showDangerAlert, setShowDangerAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleDangerAlertClose = () => {
      setShowDangerAlert(false);
    };

    const handleSuccessAlertClose = () => {
      setShowSuccessAlert(false);
    }


    return <>

    <DangerAlert
      showAlert={showDangerAlert}
      onCloseAlert={handleDangerAlertClose}
    />
    <SuccessAlert
      showAlert={showSuccessAlert}
      onCloseAlert={handleSuccessAlertClose}
    />
    
        <Formik 
        initialValues={{ titulo: '', area: '', palavrasChave: '', codAutor: '', 
          codOrientador: '', data: '', file: null, resumo: ''}}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
          const formData = new FormData();
          
          const trabalhoRequest = {
            titulo: values.titulo,
            area: values.area,
            palavrasChave: values.palavrasChave,
            data: new Date(values.data).getFullYear(),
            codAutor: values.codAutor,
            codOrientador: values.codOrientador,
            resumo: values.resumo
          };

          formData.append('file', values.file);
          formData.append('trabalhoRequest', JSON.stringify(trabalhoRequest));
          
  
          fetch('http://localhost:8000/digital-library/model', {
            method: 'POST',
            body: formData,
          })
            .then((response) => {
              if (response.ok) {
                setShowSuccessAlert(true);
                resetForm();
              } else {
                setShowDangerAlert(true);
              }
            })
            .catch((error) => {
              setShowDangerAlert(true);
            });
        }}

        >
            {(props) =>(
                <form  noValidate onSubmit={props.handleSubmit}>
                <div className="AdicionarTrabalho">
                  <InputComponent id="titulo" name="titulo" type="text" label="Titulo"/>

                  <InputComponent id="palavrasChave" name="palavrasChave" type="text" label="Palavras-Chave"/>

                  <InputComponent id="codAutor" name="codAutor" type="text" label="Codigo Autor"/>

                  <InputComponent id="codOrientador" name="codOrientador" type="text" label="Codigo do Orientador"/>
                  
                  <div className="inputSp">
                    <InputComponent id="data" name="data" type="date" label="Data de Publicacao"/>
                  </div>
                  <div className="form-group">
                    <SelectComponent id="area" name="area" label="Area de Pesquisa" options={areaOptions} />
                  </div>
                  <div className="inputSp">
                    <FileComponent id="file" name="file" label="Arquivo Digital"/>
                  </div>

                  <div className="txarea">
                    <TextAreaComponent id="resumo" name="resumo" type="text" label="Resumo"/>
                  </div>
                  
                  <button type="submit">Adicionar</button>

                </div>
                </form>

            )}
        </Formik>
    </>
}

export default HomeField