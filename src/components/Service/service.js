import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                { icon : "grid", title : "Diseño ", desc : "HTML , CSS" },
                { icon : "edit", title : "Base de datos", desc : "Oracle BD , MySql ." },
                { icon : "headphones", title : "Awesome Support", desc : "The languages only differ in their grammar their pronunciation" },
                { icon : "layers", title : "Frameworks", desc : "React Developer" },
                { icon : "code", title : "Lenguajes de Programación", desc : "Java, C++ , Python ,kotlin" },
                { icon : "tablet", title : "Responsive layout", desc : "Their separate existence is a myth. For science, music, etc." },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
        <section className="section bg-light" id="services">
            <Container>
            <SectionTitle
                subtitle="Conocimientos"
                title=" "
                desc=" "
            />

                <Row>
                    <ServiceBox services={this.state.services} />
                </Row>
                

                <Row className="mt-4">
                    <Col lg={12}>
                        <div className="text-center">
                            <Link to="#" className="btn btn-success">View more</Link>
                        </div>
                    </Col>
                </Row>
                
            </Container>
            
        </section>
            </React.Fragment>
        );
    }
}

export default Process;