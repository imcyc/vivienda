import React from 'react';
import { Player, LoadingSpinner, BigPlayButton } from 'video-react';
import SideMenu from '../SideMenu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Capsulas = () => {
  return (
    <Container fluid={true}>
      <Row className="mb-3">
        <Col xs={1} md={1} style={{padding: '0'}}>
          <SideMenu />
        </Col>
        <Col xs={8} md={8} style={{padding: '0'}}>
          <hr/>
          <h1><i className="lni-chevron-right"></i> CÁPSULAS</h1>
          <hr/>
          <Player
            src="https://18.219.47.222/apis/vivienda/capsula/Capsula.mp4"
            autoPlay={true}
          >
            <BigPlayButton position="center" />
            <LoadingSpinner />
          </Player>
        </Col>
        <Col xs={3} md={3}>
          <hr/>
          <h1><i className="lni-chevron-right"></i> INFOGRAFÍAS</h1>
          <hr/>
          <div style={{maxHeight: '500px', overflow: 'auto'}}>
            <img src="https://18.219.47.222/apis/vivienda/capsula/INFOGRAFIAS/Control_de_calidad_concreto.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/capsula/INFOGRAFIAS/Control_de_calidad_terraceria.png" alt="" style={{width: '100%'}}/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
 
export default Capsulas;