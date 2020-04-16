import React from 'react';
import './Nav.scss';
import {NavLink} from "react-router-dom";
import { Container,Row,Col,Form, FormControl, Button } from 'react-bootstrap';



const Nav = () => {


    return (
      <nav>
      <Container>
        <Row>
          <Col xs={2} md={4} lg={6} className="part__left">
            <a className="logo" href="/" target="_self"><img src="./assets/logo.svg" alt="logo"/></a>
          </Col>

          <Col xs={10} md={8} lg={6} className="part__right">
            <Form inline className="justify-content-end">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>

            <ul className="nav-links d-flex justify-content-between">
              <NavLink activeClassName='is-active' exact to="/">
                <li>Home</li>
              </NavLink>
              <NavLink activeClassName='is-active' to="/about">
                <li>About</li>
              </NavLink>
              <NavLink activeClassName='is-active' to="/contact">
                <li>Contact</li>
              </NavLink>
              <NavLink activeClassName='is-active' to="/kitchen">
                <li>Kitchen</li>
              </NavLink>
              <NavLink activeClassName='is-active' to="/slider">
                <li>Slider</li>
              </NavLink>
            </ul>
          </Col>
        </Row>
      </Container>

      </nav>
    );
}

export default Nav;
