import React, { Component } from 'react';
import './style.css'

class ServiceBox extends Component {
    render() {
        const {logo} = this.props;
        return (
            <div>
                <img src={logo} width="100px" height="100px" className="servicebox" />
                <h3>{this.props.title}</h3>
                <text>{this.props.text}</text>
            </div>
        );
    }
}

export default ServiceBox;