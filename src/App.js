import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Container, Col, Row} from 'react-bootstrap';
import Main from './components/main';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component{
    render(){
        return(
          <Container fluid>   
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">
              <img
                  alt=""
                  src={require('./image/logo.svg')}
                  className="logo-img d-inline-block align-top"
                />{' '}</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-center">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Row>
              <Col>
                <Main/>
              </Col>
            </Row>
          </Container>
        )
    }
}

export default App;
