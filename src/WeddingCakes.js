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
                    <h2>Check the most popular wedding cakes we offer!</h2>
                    <div className="box">
                        <img src={image1} alt="Avatar" className="image"/>
                        <div className="overlay">
                            <div className="text">Elegant white cake</div>
                        </div>
                    </div>

                    <div className="box">
                        <img src={image2} alt="Avatar" className="image"/>
                        <div className="overlay">
                            <div className="text">Cake with fruits</div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={image3} alt="Avatar" className="image"/>
                        <div className="overlay">
                            <div className="text">Naked cake with flowers</div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={image4} alt="Avatar" className="image"/>
                        <div className="overlay">
                            <div className="text">Muffin cake</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeddingCakes;

