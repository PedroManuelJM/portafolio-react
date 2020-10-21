import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col
} from "reactstrap";


//Import Images
import bd_tienda from "../../assets/images/tienda/bd-tienda.png";
import portada1 from "../../assets/images/tienda/portada1.PNG";
import portada2 from "../../assets/images/tienda/portada2.PNG";
import portada3 from "../../assets/images/tienda/portada3.PNG";
import portada4 from "../../assets/images/tienda/portada4.PNG";
import registro_usuario from "../../assets/images/tienda/registrousuario.PNG";
import login from "../../assets/images/tienda/login.PNG";
import iniciasesion from "../../assets/images/tienda/iniciasesion.PNG";
import agregandocarrito from "../../assets/images/tienda/Agregandocarrito.PNG";
import carritocompra from "../../assets/images/tienda/carritocompra.PNG";
import Factura from "../../assets/images/tienda/Factura.PNG";
import Pago from "../../assets/images/tienda/Pago.PNG";
import wishlist from "../../assets/images/tienda/wishlist.PNG";
import Trackingpedido from "../../assets/images/tienda/Trackingpedido.PNG";
import panel from "../../assets/images/tienda/Paneladministración.PNG";
import producto from "../../assets/images/tienda/Producto.PNG";
import categoria from "../../assets/images/tienda/categoria.PNG";
import unidad from "../../assets/images/tienda/unidad.PNG";
import marca from "../../assets/images/tienda/marca.PNG";
import reporte from "../../assets/images/tienda/reporte.PNG";

class Section extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="hero-section" id="home">
                    <Container>
                        <Row className="justify-content-center">   
                        <h3 style={{color: 'red'}}>Proyecto -Tienda Online</h3>      
                        </Row>
                        <br></br>
                        <Row>
                               <Col lg={6}>
                               <h4>Requerimiento Funcionales-Cliente</h4> 
                               <p>* Registrarse usuario , Recuperar cuenta </p>
                               <p>* Carrito de compra , Comprobante de Pago </p>
                               <p>* Pago - Paypal </p>
                               <p>* WhisList (Lista de deseos - productos )</p>
                               <p>* Tracking de Pedidos </p>      
                               </Col>
                               <Col lg={6}>
                               </Col>    
                        </Row>
                        <Row>
                               <Col lg={6}>
                               <h4>Requerimiento Funcionales-Administrador</h4> 
                               <p>* CRUD  productos , categorias, marca y unidad </p>
                               <p>* Consultar cliente y ventas </p>
                               <p>* Reportes generales - descargar los datps en formato PDF y excel </p>                             
                               </Col>
                               <Col lg={6}>

                               </Col>
                           
                        </Row>
                    </Container>
                </section>
                <br></br>
                <section className="" id="home">
                    <Container>
                        <Row className="justify-content-center">   
                        <h3>Modelo de Base de Datos -Tienda Online</h3>              
                            <Col lg={12}>
                                <div >
                                    <img src={bd_tienda} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <br></br>
                <section className="hero-section" id="home">
                    <Container>
                        <Row className="justify-content-center">   
                        <h3>Portada Tienda Online</h3>              
                            <Col lg={12}>
                                <div >
                                    <img src={portada1} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">              
                            <Col lg={12}>
                                <div >
                                    <img src={portada2} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">              
                            <Col lg={12}>
                                <div >
                                    <img src={portada3} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">              
                            <Col lg={12}>
                                <div >
                                    <img src={portada4} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">   
                        <h3>Registro Usuario</h3>               
                            <Col lg={12}>
                                <div >
                                    <img src={registro_usuario} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">   
                        <h3>Iniciar Sesión Usuario</h3>               
                            <Col lg={12}>
                                <div >
                                    <img src={login} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">              
                            <Col lg={12}>
                                <div >
                                    <img src={iniciasesion} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">   
                        <h3>Agregando al carrito compra</h3>               
                            <Col lg={12}>
                                <div >
                                    <img src={agregandocarrito} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">              
                            <Col lg={12}>
                                <div >
                                    <img src={carritocompra} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">   
                        <h3>Realizando la compra</h3>               
                            <Col lg={12}>
                                <div >
                                    <img src={Factura} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>                    
                        <Row className="justify-content-center">       
                        <h3>Pagando por Paypal</h3>      
                            <Col lg={12}>
                            <h4>El monto en soles se ha convertido a dólar</h4>  
                                <div >
                                    <img src={Pago} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>                    
                        <Row className="justify-content-center">       
                        <h3>Lista de deseos - WishList</h3>      
                            <Col lg={12}>
                                <div >
                                    <img src={wishlist} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>                    
                        <Row className="justify-content-center">       
                        <h3>Tracking Pedido</h3>      
                            <Col lg={12}>
                                <div >
                                    <img src={Trackingpedido} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">       
                        <h2> Panel de Administración </h2>      
                            <Col lg={12}>
                                <div >
                                    <img src={panel} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">       
                        <h2> CRUD - PRODUCTO  </h2>      
                            <Col lg={12}>
                                <div >
                                    <img src={producto} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">       
                        <h2> CRUD - CATEGORIA  </h2>      
                            <Col lg={12}>
                                <div >
                                    <img src={categoria} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">       
                        <h2> CRUD - MARCA  </h2>      
                            <Col lg={12}>
                                <div >
                                    <img src={marca} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">       
                        <h2> CRUD - UNIDAD </h2>      
                            <Col lg={12}>
                                <div >
                                    <img src={unidad} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">       
                        <h2> REPORTES  </h2>      
                            <Col lg={12}>
                                <div >
                                    <img src={reporte} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                        <br></br>




                    </Container>
                    
                </section>

            </React.Fragment>
        );
    }
}

export default Section;