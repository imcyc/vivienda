import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo-imcyc.svg';
import './Header.css';

const Header = (props) => {
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