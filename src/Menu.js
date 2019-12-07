import React, {Component} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {
    Route,
    HashRouter
} from "react-router-dom";
import Order from "./Order";
import ParallaxScrolling from "./ParallaxScrolling";

class Menu extends Component {
    componentDidMount() {
        document.title = 'Cutie Pie';
    }

    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                            <Navbar.Brand href="/">Cutie Pie</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link as={Link} to="/order">About us</Nav.Link>
                                    <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                                    <NavDropdown title="Offer" id="collasible-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="/wedding">Wedding cakes</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/children">Cakes for children</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/desserts">Other cakes</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item as={Link} to="/special">Special orders</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <div className="content">
                            <Route exact path="/order" component={Order}/>
                            <Route exact path="/pricing" component={Order}/>
                            <Route exact path="/" component={ParallaxScrolling}/>
                        </div>
                    </div>
                </HashRouter></div>);
    }
}

export default Menu;