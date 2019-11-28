import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo-imcyc.svg';
import './Header.css';

const Header = (props) => {
    const { datosUsuario } = props;
    return (
      <Navbar expand="lg">
        <Navbar.Brand>
          <img src={logo} alt="Manual de autoconstrucción" title="Manual de autoconstrucción" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    );
}
 
export default Header;