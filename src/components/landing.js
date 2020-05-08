import React, {Component} from 'react';
import {Jumbotron, Container,Row,Col,Button} from 'react-bootstrap';
import '../App.css';


class Landing extends Component{
    render(){
        return(
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col className="jumbo-text">
                        <h1 className="first-text">Just Browsing</h1>
                        <h1 className="second-text text-yellow">Crypto Portfolio</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Button className="btn bg-yellow">Learn More</Button>
                        <Button className="btn bg-dark">Download</Button>
                        </Col>
                        <Col>
                        <img
                        alt=""
                        src={require('../image/jumbo.svg')}
                        width="30"
                        height="30"
                        className="jumbo-img"
                        />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}

export default Landing;