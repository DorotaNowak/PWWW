import React, {Component} from "react";
import './css/about.css';

const image = require('./img/cake2.jpg');

const divStyle = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    filter: 'FlipH'
};

class Pricing extends Component {
    render() {
        return (
            <div style={divStyle}>
                <div className='main'>
                    <div className='box'>
                        <p>We are an international, premium patisserie and café founded in 1990 specializing in
                            delightful assortments of desserts, pastries and cakes baked daily. Our mission is to bring
                            happiness to everyone by adapting to people’s ever-expanding palates with our decadent,
                            unique and
                            sophisticated pastries, breads, and cakes. We serve a variety of treats ranging from
                            appetizing snacks to stunning and delicious cakes for all occasions, as well as
                            chef-inspired sandwiches and salads.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;

