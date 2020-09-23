import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

import { Link } from 'react-router-dom';
//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
import feature1 from "../../assets/images/features/img-1.png";



class Prueba extends Component {

    render() {
        return (

        <section className="section" id="features">
            <Container>

                <Row>
                    <Col lg={5}>
                        <div>
                            <FeatureBox icon="bar-chart-2" title="Proyecto Tienda Online" smallFeatures={this.state.smallFeatures1} desc="If several languages coalesce, the grammar of the resulting language is more simple and regular." link="home" />
                        
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
                                    <img src={feature1} alt="" className="img-fluid mx-auto d-block"/>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                

                
               
            </Container>
            
        </section>
 
        );
    }
}

export default Prueba;