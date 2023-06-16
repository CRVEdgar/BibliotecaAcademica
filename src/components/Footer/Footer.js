import React from "react";

import 'bootswatch/dist/minty/bootstrap.css'
import './Footer.css'

function Footer(){
    return (
        <>
        <footer>
            <div class="container footer">
                <div class="row">
                    <div class="col-md-2">
                        {/*<img src="imagens/spotify.svg" width="142"></img>*/}
                    </div>
                    <div class="col-md-2">
                        <h4>company</h4>
                        <ul class="navbar-nav">
                            <li><a href="">Sobre</a></li>
                            <li><a href="">Empregos</a></li>
                            <li><a href="">Imprensa</a></li>
                            <li><a href="">Novidades</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h4>comunidades</h4>
                        <ul class="navbar-nav">
                            <li><a href="">Artistas</a></li>
                            <li><a href="">Desenvolvedores</a></li>
                            <li><a href="">Marcas</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h4>links uteis</h4>
                        <ul class="navbar-nav">
                        <li><a href="">Ajuda</a></li>
                        <li><a href="">Presentes</a></li>
                        <li><a href="">Player da web</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <ul>
                        <li>
                        {/*} <a href=""><img src="imagens/facebook.png"></a>*/}
                        </li>
                        <li>
                        {/*} <a href=""><img src="imagens/twitter.png"></a>*/}
                        </li>
                        <li>
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