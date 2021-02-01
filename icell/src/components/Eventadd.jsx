import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import './Eventadd.css';
 
const Eventadd = () => {
    return (
       <>
       <Row><br></br></Row>
       <div className="heading">New Event</div>
       <div>
          <Form>
              <Form.Group controlId="ControlInput1">
                  <Form.Control className="title-margin"  type="text" placeholder="Title" />
              </Form.Group>
              <Form.Group controlId="ControlSelect1">
                <Form.Control className="eventlink-margin" type="text" placeholder="Event Link" />
              </Form.Group>
              <Form.Group controlId="ControlTextarea1">
                <Form.Control className="Description-margin" as="textarea" placeholder="Description" rows={7} />
              </Form.Group>
          </Form>
       </div>
       <div className="upload_button">
         <Button className="Button_customize1 mr-1">Add Link</Button>
          <Button className="Button_customize1">Upload Cover Image</Button>
       </div>
       <div className="submit_button">
         <Button className="Button_customize2_1 mr-1">Cancel</Button>
          <Button className="Button_customize2_2">Submit</Button>
       </div>
       </>
    );
}


export default Eventadd;