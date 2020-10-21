import React, { Component } from 'react';

import NavbarPage from "../../components/Navbar/Navbar_Page";
//import Section from './section';
import Footer from "../../components/Footer/footer";
import Section from '../Proyectos/section';



class ProyectoTienda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [
                   { id: 1, idnm: "home", navheading: "Inicio" }
              
            ],
            pos: document.documentElement.scrollTop,
            imglight: false,
            navClass: ""
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > this.state.pos) {
            this.setState({ navClass: "nav-sticky", imglight: false });
        }
        else {
            this.setState({ navClass: "", imglight: false });
        }
    };


    render() {
        return (
            <React.Fragment>

                {/* Importing Navbar */}
                <NavbarPage navItems={this.state.navItems} navClass={this.state.navClass} imglight={this.state.imglight} />

                {/* Importing section */}
                <Section/>

                {/* Importing Footer */}
                <Footer />
            </React.Fragment>
        );
    }

   

}

export default ProyectoTienda;