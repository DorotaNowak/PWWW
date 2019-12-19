import React, {Component} from "react";
import './css/about.css';

const image = require('./img/about1.jpg');

const divStyle = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
};

class WeddingCakes extends Component {
    render() {
        return (
            <div style={divStyle}>
                <div className='main'>
                    <div className='box'>
                        <p>Wedding cakes page!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeddingCakes;

