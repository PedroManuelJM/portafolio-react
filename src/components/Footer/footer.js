import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Media } from "reactstrap";
import FeatherIcon from 'feather-icons-react';

//Import Footer link
import FooterLinks from "./footer-links";

class Footer extends Component {
    state = {
        links1 : [
            { link : "#", title : "About Us" },
            { link : "#", title : "Media & Press" },
            { link : "#", title : "Career" },
            { link : "#", title : "Blog" },
        ],
        links2 : [
            { link : "#", title : "Pricing" },
            { link : "#", title : "For Marketing" },
            { link : "#", title : "For CEOs" },
            { link : "#", title : "For Agencies" },
            { link : "#", title : "Our Apps" },
        ],
    }
    render() {
        return (
            <React.Fragment>
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg={4} sm={6} >
                        <div>
                         
                        </div>
                    </Col>
                    <Col lg={{size:2, offset:1}} sm={6}>
                        <div>
                         
                        </div>
                    </Col>
                    <Col lg={2} sm={6} >
                        <div>
                          
                        </div>
                    </Col>

                    <Col lg={3} sm={6}>
                        <div>
                            <h5 className="mb-4 footer-list-title">Contacto</h5>

                            <div>
                                <Media>
                                    <i>
                                    <FeatherIcon icon="mail" className="icon-dual-light icons-sm mt-1 mr-2" />
                                    </i>
                                    <Media body>
                                        <p>manuelpj20@hotmail.com</p>
                                    </Media>
                                </Media>
                                <Media>
                                    <i>
                                    <FeatherIcon icon="phone" className="icon-dual-light icons-sm mt-1 mr-2" />
                                    </i>
                                    <Media body>
                                        <p>949311571</p>
                                    </Media>
                                </Media>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
                {/* Render footer links */}
                <FooterLinks/>
            </React.Fragment>
        );
    }
}

export default Footer;