import React from "react";

import erroImg from './503-errror.png'

function PaginaoEncontrada() {
    return<>
        <h1>503</h1>
        <p><strong>Service Unavailable</strong></p>
        <p>Serviço Temporariamente Indisponível. Tente novamente em instantes. Se o problema persistir, entre em contato com o suporte</p>

        <img src={erroImg}></img>
    </>
}

export default PaginaoEncontrada