import React, { Component } from 'react';
import { Player, LoadingSpinner, BigPlayButton } from 'video-react';
import Lightbox from 'react-image-lightbox';
import SideMenu from '../SideMenu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const images = [
  'http://18.219.47.222/apis/vivienda/muros/Cerramientos_y_malla.png',
  'http://18.219.47.222/apis/vivienda/muros/Cimbrado_para_muro_y_losa.png',
  'http://18.219.47.222/apis/vivienda/muros/Colocacion y compactacion de concreto.png',
  'http://18.219.47.222/apis/vivienda/muros/Colocacion_de_silletas.png',
  'http://18.219.47.222/apis/vivienda/muros/Curado.png',
  'http://18.219.47.222/apis/vivienda/muros/Decimbrado_y_limpieza.png',
];

class Muros extends Component {
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
            <h1><i className="lni-chevron-right"></i> MUROS</h1>
            <hr/>
            <Player
              src="http://18.219.47.222/apis/vivienda/muros/Muros.mp4"
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
              <img src="http://18.219.47.222/apis/vivienda/muros/Cerramientos_y_malla.png" alt="" style={{width: '100%'}} />
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/muros/Cimbrado_para_muro_y_losa.png" alt="" style={{width: '100%'}}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/muros/Colocacion y compactacion de concreto.png" alt="" style={{width: '100%'}}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/muros/Colocacion_de_instalaciones.png" alt="" style={{width: '100%'}}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/muros/Colocacion_de_silletas.png" alt="" style={{width: '100%'}}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/muros/Curado.png" alt="" style={{width: '100%'}} onClick={() => this.setState({ isOpen: true })}/>
              <hr/>
              <img src="http://18.219.47.222/apis/vivienda/muros/Decimbrado_y_limpieza.png" alt="" style={{width: '100%'}}onClick={() => this.setState({ isOpen: true })}/>
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
 
export default Muros;