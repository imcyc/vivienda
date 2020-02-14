import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import './Home.css';

const Home = (props) => {

    return ( 
      <div className="App">
        <Carousel />
        <header className="App-header">
          <div className="wrapper fadeInDown" style={{zIndex: '10'}}>
            <div id="formContent">
                <div className="fadeIn first">
                  <h1><span className="azul">MANUAL PARA LA CONSTRUCCIÓN DE VIVIENDA INDUSTRIALIZADA</span></h1>
                </div>
                <form onSubmit={props.login}>
                  
                  <input type="text" id="login" className="fadeIn second" name="user" placeholder="CORREO ELECTRÓNICO"/>
                  <input type="password" id="password" className="fadeIn third" name="password" placeholder="CONTRASEÑA"/>
                  
                  <div className="container loged">
                    <div className="row">
                      <div className='col-xs-12 col-md-12 col-lg-12'>
                        <button type="submit" className="fadeIn fourth mb-0">
                          <i className="lni-chevron-right" style={{top: '30px'}}></i> INGRESAR
                        </button>
                        {/*
                        <Link to="/cimentacion" className="fadeIn fourth mb-0">
                          <i className="lni-chevron-right" style={{top: '30px'}}></i> INGRESAR
                        </Link>
                        */}
                      </div>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </header>
      </div>
    );

}
 
export default Home;