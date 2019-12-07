import React, {Component} from "react";
import Menu from "./Menu";
import ParallaxScrolling from "./ParallaxScrolling";
//import './css/main.css';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};


class App extends Component {
    render() {
        return (
            <div>
                <header className="entry-header">
                    <div className="inner">
                        <Menu name="Parallax"/>
                    </div>
                </header>
            </div>
        )
    }
}


export default App;