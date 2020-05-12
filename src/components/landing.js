import React, {Component} from 'react';
import {Jumbotron, Container,Row,Col,Button,Card,ListGroup} from 'react-bootstrap';
import '../App.css';


class Landing extends Component{
    render(){
        return(
            <div className="landing">
                <Jumbotron style={{height:'100vh'}}>
                    <Container>
                        <Row>
                            <Col className="jumbo-text"  xs={12} md={6}>
                                <h1 className="first-text text-dark">Hello, world!</h1>
                                <h1 className="second-text text-yellow">Crypto Portfolio</h1>
                                <p>This is a simple hero unit, a simple jumbotron-style component for calling
                                    extra attention to featured content or information.</p>
                                <p><Button className="bg-dark" variant="primary">Learn more</Button>
                                <Button className="bg-yellow"  variant="primary">Download</Button></p>
                            </Col>
                            <Col xs={12} md={6}>
                                <img
                                    src={require('../image/jumbo.svg')}
                                    width="80%"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container style={{'min-height':'100vh'}}>
                    <Row className="title-text">
                        <Col>
                            <h3 className="first-text text-dark">Lorem Ipsum sit</h3><br/>
                            <h5 className="sub-title text-yellow">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="card-custom" xs={12} md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://placeimg.com/640/360/any" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="btn-card bg-yellow" variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col className="card-custom" xs={12} md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://placeimg.com/640/360/any" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="btn-card bg-yellow" variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col className="card-custom" xs={12} md={4} style={{ display: 'grid'}}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://placeimg.com/640/360/any" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="btn-card bg-yellow" variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="about bg-yellow">
                    <Row>
                    <Col className="box jumbo-text"  xs={12} md={8}>
                            <h1 className="first-text text-dark">Hello, world!</h1>
                            <h1 className="second-text text-dark">Crypto Portfolio</h1>
                            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ListGroup>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col xs={12} md={4}>
                            <img
                                src={require('../image/vector.svg')}
                                width="80%"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Landing;