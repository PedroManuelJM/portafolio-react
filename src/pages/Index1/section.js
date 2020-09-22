import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Button

} from "reactstrap";


//Import section 
import '../Index1/section.css';


class Section extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="hero-section" id="home">     
                                <section className="imagen-section" id="imagen">
                                <Container>
                                    <h2>bienvenidaa</h2>
                                    <Row className="justify-content-center">     
                            
                                    <Button href="https://www.online-convert.com/es/resultado/ed7c9b67-ef66-4408-9d77-6297fc8e3ca0" className="btn btn-primary"  target="_blank" >Mi Github</Button>
                                    </Row>    
                                </Container>
                                </section>     
                </section>
            </React.Fragment>
        );
    }
}

export default Section;

