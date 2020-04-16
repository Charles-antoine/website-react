import React, {useState,useEffect} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './Footer.scss';

function Footer() {
  
  //FUNCTION CALL ON LOAD
  useEffect(()=>{},[]);

  //STATE
  // const [copyright, setcopyright] = useState('Copyright');
  const [copyright] = useState('Copyright');

  
 return (
    <footer>
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
        <ul className="d-flex justify-content-start align-items-center p-2">
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
        </Col>
        <Col xs={12} md={6} lg={8}>
          <div className="d-flex justify-content-md-end align-items-center p-2">
            <h6>{copyright}</h6>
          </div>
        </Col>
      </Row>
    </Container>
    </footer>
  );

}

export default Footer;
