import React, {Component} from "react";
import './css/about.css';

const image = require('./img/about.jpg');

const divStyle = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    filter: 'FlipH'
};


class About extends Component {
    render() {
        return (
            <div style={divStyle}>
                <div className='main'>
                    <div className='box'>
                        <h3>We are the best bakery in the city. Buy our products.With colorful treats from floor to
                            ceiling, candy stores bring out the kid in every shopper, whether they grew up in the era of
                            penny candy or the latest outrageous confection. These shops also offer something for
                            visitors who are just as sweet on design.</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

