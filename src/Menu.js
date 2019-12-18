import React, {Component} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {
    Route,
    HashRouter
} from "react-router-dom";

import ParallaxScrolling from "./ParallaxScrolling";
import About from "./About";
import MyInfiniteScroll from "./InfiniteScroll";
import Pricing from "./Pricing"


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
                            <Navbar.Brand href="/"><img src='/logo1.png' alt="CS" height="60"/></Navbar.Brand>

                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link as={Link} to="/about">About us</Nav.Link>
                                    <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                                    <NavDropdown title="Offer" id="collasible-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="/products">Our products</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item as={Link} to="/wedding">Wedding cakes</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/children">Cakes for children</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="/review">Reviews</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <div className="content">
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/pricing" component={Pricing}/>
                            <Route exact path="/review" component={MyInfiniteScroll}/>
                            <Route exact path="/" component={ParallaxScrolling}/>
                        </div>
                    </div>
                </HashRouter></div>);
    }
}

export default Menu;