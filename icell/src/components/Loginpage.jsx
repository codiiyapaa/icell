import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/*All the styling of LoginPage is done inline*/

const Loginpage = () => {
    return (
    <>
    <Row><br></br></Row>
    <Row lg={1}>
    <div style={{ display:'flex', justifyContent:'center' }}>

        <Card style={{ width: '28rem', height: '20rem', borderColor: 'black', backgroundColor: '#eceeee'}} >

        <Card.Header style={{textAlign: 'center', borderColor: 'black', fontWeight: 'bold', fontSize: '17pt'}}>Login</Card.Header>

        <Card.Body>
            <Card.Text>
            <Form>
                <Form.Group controlId="formBasicUsername">
                <Form.Row>
                    <Col xs={10}>
                        <Form.Control style={{borderColor: 'black'}} type="Username" placeholder="Username" />
                    </Col>
                </Form.Row>
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicPassword">
                <Form.Row>
                    <Col xs={10}>
                        <Form.Control style={{borderColor: 'black'}} type="password" placeholder="Password" />
                    </Col>
                </Form.Row>
                </Form.Group>
                <br></br>
                <Button style={{backgroundColor: '#37a69b', fontWeight: 'bold'}} type="submit" size="lg">
                    SIGN IN
                </Button>
            </Form>
            </Card.Text>
        </Card.Body>

        </Card>
        
    </div>
    </Row>
    </>
    );
}
 
export default Loginpage;