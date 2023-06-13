import React from 'react';
import 'bootswatch/dist/minty/bootstrap.css';

function SuccessAlert({ showAlert, onCloseAlert }) {
  return (
    <>
      {showAlert && (
        <div className="alert alert-dismissible alert-success">
          <button
            type="button"
            className="btn-close"
            onClick={onCloseAlert}
          ></button>
          <strong>Trabalho Acadêmico Armazenado!</strong> Seu TCC agora está disponível na Biblioteca Digital{' '}
          <a href="/" className="alert-link" style={{ color: '#00bfff' }}>
            buscá-lo
          </a>
          .
        </div>
      )}
    </>
  );
}

export default SuccessAlert;

