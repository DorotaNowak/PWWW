import React, {Component} from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';
import {
    Route,
    NavLink,
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
                        <h1>MENU</h1>
                        <ul className="header">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink exact to="/about">About us</NavLink></li>
                            <li><NavLink exact to="/prices">Prices</NavLink></li>
                            <li><NavLink exact to="/order">Order</NavLink></li>
                            <li><NavLink exact to="/contact">Contact</NavLink></li>
                        </ul>
                        <div className="content">
                            <Route exact path="/order" component={Order}/>
                            <Route exact path="/" component={ParallaxScrolling}/>
                        </div>
                    </div>
                </HashRouter></div>);

        /*          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">Cutie Pie</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About us</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Offer" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#wedding">Wedding cakes</NavDropdown.Item>
                            <NavDropdown.Item href="#children">Cakes for children</NavDropdown.Item>
                            <NavDropdown.Item href="#desserts">Other cakes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#special">Special orders</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>);
*/


    }
}

export default Menu;