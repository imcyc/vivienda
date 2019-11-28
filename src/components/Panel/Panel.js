import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Capsulas from './Secciones/Capsulas';



import SideMenu from './SideMenu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Panel.css';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Container fluid={true}>
        <Row>
          <Col xs={12} md={12}>
            <SideMenu />
            <div className="contenido">
              <Switch>
                <Route 
                  exact 
                  path="/panel/capsulas" 
                  component={(props) => <Capsulas 
                    {...props} 
                  />}
                />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default Panel;