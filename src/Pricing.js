import React, {Component} from "react";
import './css/pricing.css';

const image = require('./img/cake2.jpg');

const divStyle = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
};

class Pricing extends Component {
    render() {
        return (
            <div style={divStyle}>
                <div className='main'>
                    <div className='box'>
                        <p>Each order is priced individually. Price for normal cakes vary from 30 to 50$. Price for
                            wedding cakes start from 100$. Everything depends on the size and ingredients used for your
                            cake.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;

