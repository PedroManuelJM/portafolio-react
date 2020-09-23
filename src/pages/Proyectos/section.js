import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col
} from "reactstrap";


//Import Images
import tienda from "../../assets/images/tienda/tienda.png";

class Section extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="hero-section" id="home">
                    <Container>
                        <Row className="justify-content-center">                 
                            <Col lg={12}>
                                <div className="home-img mt-5 mt-lg-0">
                                    <img src={tienda} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;