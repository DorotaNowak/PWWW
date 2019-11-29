import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Order from "./Order";

class Menu extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>MENU</h1>
                    <ul className="header">
                        <li><NavLink exact to="/about">About us</NavLink></li>
                        <li><NavLink exact to="/prices">Prices</NavLink></li>
                        <li><NavLink exact to="/order">Order</NavLink></li>
                        <li><NavLink exact to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/order" component={Order}/>
                    </div>
                </div>
            </HashRouter>);
    }
}

export default Menu;