import React, {Component} from "react";
import Menu from "./Menu";
import {Parallax} from "react-parallax";
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
                <div style={styles}>
                    <Parallax bgImage={require('C:\\Users\\Dorota Nowak\\Desktop\\PWWW\\myapp\\src\\img\\slide1.jpg')}
                              strength={500}>
                        <div style={{height: 500}}>
                            <div style={insideStyles}>WELCOM TO CUTIE PIE!</div>
                        </div>
                    </Parallax>
                    <h1>| | |</h1>
                    <Parallax bgImage={require('C:\\Users\\Dorota Nowak\\Desktop\\PWWW\\myapp\\src\\img\\slide3.jpg')}
                              blur={{min: -1, max: 2}}>
                        <div style={{height: 500}}>
                            <div style={insideStyles}>The best bakery in the world!</div>
                        </div>
                    </Parallax>
                    <h1>| | |</h1>
                    <Parallax bgImage={require('C:\\Users\\Dorota Nowak\\Desktop\\PWWW\\myapp\\src\\img\\slide4.jpg')}
                              strength={400}>
                        <div style={{
                            height: 500
                        }}>
                            <div style={insideStyles}>Reverse direction</div>
                        </div>
                    </Parallax>
                    <h1>| | |</h1>
                    <Parallax
                        bgImage={require('C:\\Users\\Dorota Nowak\\Desktop\\PWWW\\myapp\\src\\img\\slide5.jpg')}
                        strength={300}
                        renderLayer={percentage => (
                            <div>
                                <div
                                    style={{
                                        position: "absolute",
                                        background: `rgba(255, 255, 255, ${percentage * 1})`,
                                        left: "50%",
                                        top: "50%",
                                        borderRadius: "50%",
                                        transform: "translate(-50%,-50%)",
                                        width: percentage * 500,
                                        height: percentage * 500
                                    }}
                                />
                            </div>
                        )}
                    >
                        <div style={{height: 500}}>
                            <div style={insideStyles}>renderProp</div>
                        </div>
                    </Parallax>
                    <Parallax>
                        <div style={{height: 500}}>
                            <div style={insideStyles}>More questions? Contact us!</div>
                        </div>
                    </Parallax>
                </div>
            </div>
        )
    }
}


export default App;