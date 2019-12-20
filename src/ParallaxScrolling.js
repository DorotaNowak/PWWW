import React, {Component} from "react";
import {Parallax} from "react-parallax";
import './css/slides.css';

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
    transform: "translate(-50%,-50%)",
    opacity: 0.7
};


class ParallaxScrolling extends Component {
    render() {
        return (
            <div>
                <div style={styles}>
                    <Parallax bgImage={require('./img/slide1.jpg')}
                              strength={400}>
                        <div style={{height: 500}}>
                            <div className="hsContainer">
                                <div className="hsContent" data-center="opacity: 1" data-106-top="opacity: 0"
                                     data-anchor-target="#slide-1 h2">
                                    <h1>Welcome!</h1>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <h1>| | |</h1>
                    <Parallax bgImage={require('./img/slide3.jpg')}
                              strength={400} blur={{min: -1, max: 2}}>
                        <div style={{height: 500}}>
                            <div className="hsContainer">
                                <div className="hsContent" data-center="opacity: 1" data-106-top="opacity: 0"
                                     data-anchor-target="#slide-1 h2">
                                    <h2>Order the cake<br/>you need</h2>
                                    <p>We offer many different cakes and desserts in our patisserie</p>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <h1>| | |</h1>
                    <Parallax bgImage={require('./img/slide7.jpg')}
                              strength={400}>
                        <div style={{
                            height: 500
                        }}>
                            <div className="hsContainer">
                                <div className="hsContent" data-center="opacity: 1" data-106-top="opacity: 0"
                                     data-anchor-target="#slide-1 h2">
                                    <h2>Try our delicious<br/>desserts and coffee</h2>
                                    <p>You'll find many types of coffee beans here, from the most popular to the most
                                        special</p>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <h1>| | |</h1>
                    <Parallax
                        bgImage={require('./img/slide5.jpg')}
                        strength={400}
                        renderLayer={percentage => (
                            <div>
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%",
                                        borderRadius: "50%",
                                        transform: "translate(-50%,-50%)",
                                        height: percentage * 100,
                                        color: "white",
                                        opacity: 1 / percentage - 1
                                    }}
                                >
                                    <h1>Check our menu!</h1>
                                </div>
                            </div>
                        )}
                    >
                        <div style={{height: 500}}>
                        </div>
                    </Parallax>
                    <Parallax>
                        <div style={{height: 500}}>
                            <div style={insideStyles}>More questions? Contact us!<br/>
                                Phone number: 740-824-8279<br/>
                                <img src='/logo1.png' alt="CS" height="150"/>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
        )
    }
}


export default ParallaxScrolling;