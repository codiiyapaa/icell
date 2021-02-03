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
            <div className="table-header">
               <div className="table-header-title">Title</div>
               <div className="table-header-date">Date</div>
               <div className="table-header-type">Type</div>
            </div>
         </Row>
         <Row>
            <div className="sample-blog">
               <div className="blog-title">ICell stands for Industry cell</div>
               <div className="blog-date">02-02-2021</div>
               <div className="blog-type">Blog</div>
               <Button className="blog-button">Delete</Button>
            </div>
         </Row>
         <Row>
            <div className="sample-blog">
               <div className="blog-title">ICell stands for Industry cell</div>
               <div className="blog-date">02-02-2021</div>
               <div className="blog-type">Blog</div>
               <Button className="blog-button">Delete</Button>
            </div>
         </Row>
         <Row>
            <div className="sample-blog">
               <div className="blog-title">ICell stands for Industry cell</div>
               <div className="blog-date">02-02-2021</div>
               <div className="blog-type">Blog</div>
               <Button className="blog-button">Delete</Button>
            </div>
         </Row>
      </Container>
       </>
    );
}
 
export default Dashboard;