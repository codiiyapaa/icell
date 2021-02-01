import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import './Blogadd.css';
 
const Blogadd = () => {
    return (
       <>
       <Row><br></br></Row>
       <div className="heading">New Blog</div>
       <div>
          <Form>
              <Form.Group controlId="ControlInput1">
                  <Form.Control className="title-margin"  type="text" placeholder="Title" />
              </Form.Group>
              <Form.Group controlId="ControlSelect1">
                <Form.Control className="eventlink-margin" type="text" placeholder="Author" />
              </Form.Group>
              <Form.Group controlId="ControlTextarea1">
                <Form.Control className="Description-margin" as="textarea" placeholder="Body" rows={7} />
              </Form.Group>
          </Form>
       </div>
       <div className="upload_button">
         <Button className="Button_customize1 mr-1">Add Link</Button>
         <Button className="Button_customize1 mr-1">Upload Cover Image</Button>
         <Button className="Button_customize1 mr-1">Upload Body Image</Button>
       </div>
       <div className="submit_button">
         <Button className="Button_customize2_1 mr-1">Cancel</Button>
          <Button className="Button_customize2_2">Submit</Button>
       </div>
       </>
    );
}


export default Blogadd;