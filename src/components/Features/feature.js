import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

//import { Link } from 'react-router-dom';
//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images

import tienda from "../../assets/images/tienda/tiendita.png";

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smallFeatures1 : [
                { title : "Base de datos : My Sql" },
                { title : "Diseño: Bootstrap " },
                { title : "Lenguaje Prog. : Java" },
                { title : "IDE : NetBeans 8.2" },
                { title : "Validación: JavaScript" },

            ],
            smallFeatures2 : [
                { title : "Donec quam felis" },
                { title : "Ultricies nec" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
        <section className="section" id="features">
            <Container>
            <SectionTitle
                subtitle="Portafolio"
                title=""
                desc=""
            />               

                <Row>
                    <Col lg={5}>
                        <div>
                            <FeatureBox icon="bar-chart-2" title="Proyecto Tienda Online" smallFeatures={this.state.smallFeatures1} desc="El proyecto lo realize en mis inicios de estudiante." link="/proyectotienda"  />
                            
                        </div>
                    </Col>

                    <Col lg={5} sm={8} className="ml-lg-auto">
                        <Card className="border border-light shadow-none mt-5 mt-lg-0">
                            <CardHeader className="border-0 bg-transparent">
                                <div>
                                    <i className="mdi mdi-circle text-danger mr-1"></i>
                                    <i className="mdi mdi-circle text-warning mr-1 ml-1"></i>
                                    <i className="mdi mdi-circle text-success mr-1 ml-1"></i>
                                </div>
                            </CardHeader>
                            <CardBody className="bg-light">
                                <div className="box-shadow">
                                    <img src={tienda} alt="" className="img-fluid mx-auto d-block"/>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                

               
            </Container>
            
        </section>
            </React.Fragment>
        );
    }
}

export default Features;