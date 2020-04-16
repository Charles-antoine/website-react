import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Global} from '../../helpers/Global';
import './TwoColumns.scss';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const TwoColumns = ({props}) => {
  const img = process.env.PUBLIC_URL + props.img;
  const title = props.title;
  const subline = props.subline;
  const desc = props.desc;
  const link = props.link;

  const globalVar  = Global.localhost ? Global.localhost : ''; 
  //
  const back = {
    backgroundImage: `url(${img})`,
  }
  //
  useEffect(() => {
    AOS.init();
    console.log(`ici  = ${globalVar}`);
  },[])



  return (
    <div className="twocolumns">
      <Container>
        <Row>
          <Col className="contImg" xs={12} md={6} style={back} data-aos="fade-up" data-aos-easing="ease-in-circle"  data-aos-delay="100"  data-aos-offset="100" >
          </Col>
          <Col xs={12} md={6}data-aos="fade-in" data-aos-easing="ease-in-circle"  data-aos-delay="300"  data-aos-offset="100">
          <div className="p-3">
            <h1>{title}</h1>
            <p className="subline">{subline}</p>
            <p className="desc">{desc}</p>
            <a href={link} target="_blank" rel="noopener noreferrer"><Button variant="light">Know more</Button></a>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TwoColumns;
