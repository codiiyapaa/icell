import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Loginpage.css';
/*All the styling of LoginPage is done inline*/

const Loginpage = () => {
    return (
    <>
    <Row><br></br></Row>
    <Row lg={1}>
    <div className="main">
        <Card className="card-styling" >
            <Card.Header className="card-header">Login</Card.Header>
            <Card.Body>
            <Card.Text>
                <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Row>
                        <Col xs={10}>
                            <Form.Control className="placeholder-styling" type="Username" placeholder="Username" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicPassword">
                    <Form.Row>
                        <Col xs={10}>
                            <Form.Control className="placeholder-styling" type="password" placeholder="Password" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <br></br>
                <Button className="button-styling" type="submit" size="lg">
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