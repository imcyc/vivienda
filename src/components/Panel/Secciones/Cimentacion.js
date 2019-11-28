import React, { Component } from 'react';
import { Player, LoadingSpinner, BigPlayButton } from 'video-react';
import Lightbox from 'react-image-lightbox';
import SideMenu from '../SideMenu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const images = [
  'http://18.219.47.222/apis/vivienda/cimentacion/1_Certificacion_plataforma.png',
  'http://18.219.47.222/apis/vivienda/cimentacion/2_Trazo.png',
  'http://18.219.47.222/apis/vivienda/cimentacion/3_Excavacion.png',
  'http://18.219.47.222/apis/vivienda/cimentacion/4_Instalacion_hidrosanitaria.png',
  'http://18.219.47.222/apis/vivienda/cimentacion/5_Base para cimentacion.png',
  'http://18.219.47.222/apis/vivienda/cimentacion/6.0_habilitado_colocacion.png',
  'http://18.219.47.222/apis/vivienda/cimentacion/6.1_habilitado_colocacion.png',
  'http://18.219.47.222/apis/vivienda/cimentacion/7_colocacion_silletas.png',
  'http://18.219.47.222/apis/vivienda/cimentacion/8_Colocacion_electrica.png',
  'http://18.219.47.222/apis/vivienda/cimentacion/9_Cimbra perimetral.png',
  'http://18.219.47.222/apis/vivienda/cimentacion/10.0_Compactacion_concreto.png',
  'http://18.219.47.222/apis/vivienda/cimentacion/11_Nivelacion_concreto.png',
  'http://18.219.47.222/apis/vivienda/cimentacion/12_Curado.png',
];

class Capsulas extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  render(){
    const { photoIndex, isOpen } = this.state;
    return (
      <Container fluid={true}>
        <Row className="mb-3">
          <Col xs={1} sm={1} md={1} style={{padding: '0'}}>
            <SideMenu />
          </Col>
          <Col xs={12} sm={8} md={8} style={{padding: '0'}}>
            <hr/>
            <h1><i className="lni-chevron-right"></i> CIMENTACIÓN</h1>
            <hr/>
            <Player
              src="http://18.219.47.222/apis/vivienda/cimentacion/Cimentacion.mp4"
              autoPlay={true}
            >
              <BigPlayButton position="center" />
              <LoadingSpinner />
            </Player>
          </Col>
          <Col xs={12} sm={3} md={3}>
            <hr/>
            <h1><i className="lni-chevron-right"></i> INFOGRAFÍAS</h1>
            <hr/>
            <div style={{maxHeight: '500px', overflow: 'auto'}} onClick={() => this.setState({ isOpen: true })}>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/1_Certificacion_plataforma.png" alt="" style={{width: '100%'}}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/2_Trazo.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/3_Excavacion.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/4_Instalacion_hidrosanitaria.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/5_Base para cimentacion.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/6.0_habilitado_colocacion.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/6.1_habilitado_colocacion.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/7_colocacion_silletas.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/8_Colocacion_electrica.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/9_Cimbra perimetral.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/10.0_Compactacion_concreto.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/10.1_Compactacion_concreto.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/11_Nivelacion_concreto.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/cimentacion/12_Curado.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % images.length,
                    })
                  }
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
}
 
export default Capsulas;