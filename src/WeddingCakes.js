import React, {Component} from "react";
import './css/wedding.css';

const image1 = require('./img/wedding1.jpg');
const image2 = require('./img/wedding2.jpg');
const image3 = require('./img/wedding3.jpg');
const image4 = require('./img/wedding4.jpg');

class WeddingCakes extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="box">
                        <img src={image1} alt="Avatar" className="image"/>
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>

                    <div className="box">
                        <img src={image2} alt="Avatar" className="image"/>
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={image3} alt="Avatar" className="image"/>
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={image4} alt="Avatar" className="image"/>
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeddingCakes;

