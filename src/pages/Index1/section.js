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
                                    <Row className="justify-content-center">     
                            
                                    <Button href="https://github.com/PedroManuelJM?tab=repositories" className="btn btn-primary"  target="_blank" >Mi Github</Button>
                                    </Row>    
                                </Container>
                                </section>     
                </section>
            </React.Fragment>
        );
    }
}

export default Section;

