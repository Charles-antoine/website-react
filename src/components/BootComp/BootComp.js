import React from 'react';
import { Button,ButtonToolbar, Accordion, Card } from 'react-bootstrap';



class BootComp extends React.Component{
  state = {}

  componentDidMount(){
  }
  render(){  
    return (
      <div className="">
          <ButtonToolbar>
            <Button variant="primary" size="lg" active>
              Primary button
            </Button>
            <Button variant="secondary" size="lg" active>
              Button
            </Button>
          </ButtonToolbar>



          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
      </div>
    );
  }
}

export default BootComp;
