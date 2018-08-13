import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap'
import ServiceBox from './serviceBox/index'
import './style.css'

class Service extends Component {
    render() {
        return (
            <div className="service">
                <Container >
                    <Row className="text">
                        <Col>Những tính năng có ở Cupid App</Col>
                    </Row>
                    <Row >
                        <Col  >
                           <ServiceBox logo="/images/friendIcon.png"
                           title ="Dễ  dàng kết bạn"/>
                        </Col>
                        <Col >
                            <ServiceBox logo="/images/pathloveIcon.png"
                           title ="Hành trình tình yêu"/>
                        </Col>
                        <Col  >
                            <ServiceBox logo="/images/pregnant.png"
                           title ="Đùa hoy, không có đâu :))"/>
                        </Col>
                    </Row>
                    <Row >
                        <Col  >
                           <ServiceBox logo="/images/cupidIcon.png"
                           title ="Dễ  dàng kết bạn"/>
                        </Col>
                        <Col >
                            <ServiceBox logo="/images/pathloveIcon.png"
                           title ="Hành trình tình yêu"/>
                        </Col>
                        <Col  >
                            <ServiceBox logo="/images/pregnant.png"
                           title ="Đùa hoy, không có đâu :))"/>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Service;