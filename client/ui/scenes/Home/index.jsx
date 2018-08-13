import React, { Component } from 'react';
import Header from './components/header/index'
import DownLoad from './components/download/index'
import Service from './components/service/index'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <DownLoad />
                <Service/>
            </div>
        );
    }
}

export default Home;