import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import './Dashboard.css';
 
const Dashboard = () => {
    return (
       <>
      <Container fluid>
         <Row><br/><br/><br/><br/></Row>
         <Row>
            <Col className="left-margin" xs={{span: 1}}>
               <Button className="new_content_button">New</Button>
            </Col>
            <Col className="Row-content-justify1" xs={{span: 6}}>
               <Form>
                  <Form.Control className="searchbox" type="text" placeholder="Search"/>
               </Form>
            </Col>
            <Col className="Row-content-justify2" xs={{span: 2, offset: 1}}>
            <Form.Check inline type="checkbox" id="customControlInline" label="Blog" custom/>
            <Form.Check inline type="checkbox" id="custom-Control-Inline" label="Event" custom/>
            </Col>
         </Row>
         <Row><br/><br/><br/></Row>
         <Row>
            Hello World
         </Row>
         <Row>
         </Row>
      </Container>
       </>
    );
}
 
export default Dashboard;