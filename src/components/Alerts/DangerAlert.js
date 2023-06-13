
import React from 'react';
import 'bootswatch/dist/minty/bootstrap.css';

function DangerAlert({ showAlert, onCloseAlert }) {
  return (
    <>
      {showAlert && (
        <div className="alert alert-dismissible alert-secondary">
          <button
            type="button"
            className="btn-close"
            onClick={onCloseAlert}
          ></button>
          <strong>Não foi possivel salvar seu Trabalho!</strong> Verifique o preenchimento correto dos campos e tente novamente. Se o problema persistir,
          entre em contate com o suporte
        </div>
      )}
    </>
  );
}

export default DangerAlert;
