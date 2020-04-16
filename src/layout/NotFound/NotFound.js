import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './NotFound.scss';

function NotFound() {
  
  //FUNCTION CALL ON LOAD
  // useEffect(()=>{},[]);

  //STATE
  // const [copyright, setcopyright] = useState('Copyright');

  
 return (
    <footer>
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
        <h1>NOT FOUND</h1>
        </Col>
      </Row>
    </Container>
    </footer>
  );

}

export default NotFound;
