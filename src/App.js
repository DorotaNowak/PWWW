import Menu from "./Menu";
import {Parallax} from "react-parallax";
import React from "react";
import {HashRouter} from "react-router-dom";

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

const App = () => (

    <div style={styles}>
        <Menu name="Parallax"/>
        <Parallax bgImage={require('C:\\Users\\Dorota Nowak\\Desktop\\PWWW\\myapp\\src\\img\\slide1.jpg')}
                  strength={500}>
            <div style={{height: 500}}>
                <div style={insideStyles}>HTML inside the parallax</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={require('C:\\Users\\Dorota Nowak\\Desktop\\PWWW\\myapp\\src\\img\\slide3.jpg')}
                  blur={{min: -1, max: 3}}>
            <div style={{height: 500}}>
                <div style={insideStyles}>Dynamic Blur</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={require('C:\\Users\\Dorota Nowak\\Desktop\\PWWW\\myapp\\src\\img\\slide4.jpg')}
                  strength={-100}>
            <div style={{height: 500}}>
                <div style={insideStyles}>Reverse direction</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax
            bgImage={require('C:\\Users\\Dorota Nowak\\Desktop\\PWWW\\myapp\\src\\img\\slide5.jpg')}
            strength={200}
            renderLayer={percentage => (
                <div>
                    <div
                        style={{
                            position: "absolute",
                            background: `rgba(255, 125, 0, ${percentage * 1})`,
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
        <div style={{height: 500}}/>
    </div>
);

export default App;