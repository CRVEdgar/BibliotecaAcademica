import React from "react";

import 'bootswatch/dist/minty/bootstrap.css'
import './Footer.css'

import face from './facebook.png';
import twt from './twitter.png';
import insta from './instagram.png' 

function Footer(){
    return (
        <>
        <footer>
            <div class=" footer">
                <div class="row">
                    <div class="col-md-2">
                        {/*<img src="imagens/spotify.svg" width="142"></img>*/}
                    </div>
                    <div class="col-md-2">
                        <h4>Institucional</h4>
                        <ul class="navbar-nav">
                            <li><a href="">Cursos</a></li>
                            <li><a href="">Editais</a></li>
                            <li><a href="">Departamentos</a></li>
                            {/*<li><a href="">Acontece no Campus</a></li>*/}
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h4>Sobre o Projeto</h4>
                        <ul class="navbar-nav">
                            <li>
                               
                                <a href="https://github.com/CRVEdgar/Repositorio_Digital_IFMA-MTC"> Repositório back</a> 
                                <> || </> 
                                <a href="https://github.com/CRVEdgar/BibliotecaAcademica">front</a> 
                            </li>
                            <li><a href="http://lattes.cnpq.br/4404532257172266">Desenvolvedor</a></li>
                            <li><a href="http://lattes.cnpq.br/1031286292970130">Orientador</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h4>Links uteis</h4>
                        <ul class="navbar-nav">
                        <li><a href="">Ajuda</a></li>
                        <li><a href="">Termo de Uso</a></li>
                        <li><a href="">Email</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <ul>
                        <li>
                            <a>
                                <img src={insta}>
                                </img>
                            </a>
                        {/*} <a href=""><img src="imagens/facebook.png"></a>*/}
                        </li>
                        <li>
                        <a>
                                <img src={face}>
                                </img>
                            </a>
                        {/*} <a href=""><img src="imagens/twitter.png"></a>*/}
                        </li>
                        <li>
                        <a>
                                <img src={twt}>
                                </img>
                            </a>
                        {/*} <a href=""><img src="imagens/instagram.png"></a>*/}
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
    
}

export default Footer;