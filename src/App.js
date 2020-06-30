import React, { Component } from 'react';
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Capsulas from './components/Panel/Secciones/Capsulas';
import Cimentacion from './components/Panel/Secciones/Cimentacion';
import Muros from './components/Panel/Secciones/Muros';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "ruribe@imcyc.com",
      password: "ruribe@"
    }
  }


  login = (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const password = e.target.password.value;

    if(this.state.user === user && this.state.password === password){
      window.location.assign('#/cimentacion');
    }else{
      //alert('Usuario y contraseña incorrectos!!!')
      window.location.assign('#/cimentacion');
    }
  }

  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header 
            datosUsuario={this.state.datosUsuario}
          />
          <Switch>
            <Route 
              exact 
              path="/" 
              component={(props) => <Home 
                {...props}
                login={this.login}
              />}
            />
            <Route 
              exact 
              path={`/capsulas`} 
              component={(props) => <Capsulas 
                {...props}
              />}
            />
            <Route 
              exact 
              path={`/cimentacion`} 
              component={(props) => <Cimentacion 
                {...props}
              />}
            />
            <Route 
              exact 
              path={`/muros`} 
              component={(props) => <Muros 
                {...props}
              />}
            />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default withRouter(App);
