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
          <h1><i className="lni-chevron-right"></i> CIMENTACIÓN</h1>
          <hr/>
          <Player
            src="https://18.219.47.222/apis/vivienda/cimentacion/Cimentacion.mp4"
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
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/1_Certificacion_plataforma.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/2_Trazo.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/3_Excavacion.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/4_Instalacion_hidrosanitaria.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/5_Base para cimentacion.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/6.0_habilitado_colocacion.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/6.1_habilitado_colocacion.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/7_colocacion_silletas.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/8_Colocacion_electrica.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/9_Cimbra perimetral.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/10.0_Compactacion_concreto.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/10.1_Compactacion_concreto.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/11_Nivelacion_concreto.png" alt="" style={{width: '100%'}}/>
            <hr/>
            <img src="https://18.219.47.222/apis/vivienda/cimentacion/12_Curado.png" alt="" style={{width: '100%'}}/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
 
export default Capsulas;