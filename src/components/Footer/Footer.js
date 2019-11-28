import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  state = {  }
  render() { 
    return (
      <footer className="footer">
        <div className="container">
          <h4>COMPARTIR EL CONOCIMIENTO</h4>
          <p className="text-center"><Link to="http://www.imcyc.com">Instituto Mexicano del Cemento y del Concreto A.C.</Link><br/>® 2019 | Todos Los Derechos Reservados.<br/></p>
          <ul className="social_footer_ul">
            <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
            <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
            <li><Link to="/"><i className="fa fa-linkedin"></i></Link></li>
            <li><Link to="/"><i className="fa fa-instagram"></i></Link></li>
          </ul>
        </div>
      </footer>
    );
  }
}
 
export default Footer;