import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import Carousel from './Carousel/Carousel';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  renderRegistro(valor) {
    if(valor) {
      return (
        <input type="email" className="fadeIn second" name="email2" placeholder="CORREO ELECTRÓNICO"/>
      )
    } else {
      return ''
    }
  }
  tituloRegistro(valor){
    if(valor){
      return(
        <h3 style={{color: '#6db33f'}}><b>REGÍSTRESE DE MANERA GRATUITA</b></h3>
      )
    }
  }
  render() {
    let { registrarse, registro, login, loginU, usuario, mensajeLog } = this.props;
    if(usuario){
      return (
        <Redirect to="/panel/introduccion" />
      );
    }
    return ( 
      <div className="App">
        <Carousel />
        <header className="App-header">
          <div className="wrapper fadeInDown" style={{zIndex: '10'}}>
            <div id="formContent">
                <div className="fadeIn first">
                  <h1><span className="azul">VIVIENDA</span><br/><span className="verde">INDUSTRIALIZADA</span></h1>
                  <p>Manual de buenas prácticas</p>
                </div>
                <form>
                  <input type="email" id="login" className="fadeIn second" name="email" placeholder="CORREO ELECTRÓNICO"/>
                  <input type="password" id="password" className="fadeIn third" name="password" placeholder="CONTRASEÑA"/>
                  <div className="container loged">
                    <div className="row">
                      <div className='col-xs-12 col-md-12 col-lg-12'>
                        <Link to="/panel" className="fadeIn fourth mb-0">
                          <i className="lni-chevron-right"></i> INGRESAR
                        </Link>
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
}
 
export default Home;