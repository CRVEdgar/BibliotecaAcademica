import React from "react";

import 'bootswatch/dist/minty/bootstrap.css'
import logo from './logo.jpg'; 
import './Inicio.css'

import Accordion from "../Accordions/Accordion";

function Inicio() {

    return <>


<div className="container Inicio">
    <h3>Biblioteca Digital de Trabalhos Acadêmicos - IFMA-MTC</h3>
    <div className="jumbotron" >
        
    
        {/*<div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="item active imageLogo">
                    <img src={logo} alt="O Instituto federal Fluminense campus Campos Centro" />
                </div>
            </div>
</div>*/}

        <div className="row ">
            <br />
            <form method="get" action="/jspui/simple-search" className="form-horizontal col-md-12 form-group form-group-lg" scope="search">
                <div className="col-md-12 searchbox">
                    <div className="col-md-11">
                        <input type="text" className="form-control" placeholder="Buscar na BDTA-IFMA" name="query" id="tequery" size="25" />
                    </div>
                    <div className="col-md-1">
                        <button type="submit">Buscar</button>
                    </div>
                </div>
            </form>

            <h3>Documentos depositados</h3>

            <div className="accordion" id="center">
                <Accordion/>
            </div>
        
        </div>

{/** 
        <div className="row">
            <br></br>
            <ul className="list-group">
                <li className="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge bg-primary rounded-pill">14</span>
                </li>
                
                <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge bg-primary rounded-pill">5</span>
                </li>
                <li className="list-group-item list-group-item-warning d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge bg-primary rounded-pill">4</span>
                </li>
                
            </ul>
        </div>

        <div className="row">
            
            
        </div>
*/}
    </div>
</div>

    

    </>
}

export default Inicio