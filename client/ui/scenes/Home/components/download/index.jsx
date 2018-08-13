import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap'
import './style.css'

class DownLoad extends Component {
    render() {
        return (
            <div className="download">
                <Container >
                    <Row className="textdownload">
                        <Col>Tải ứng dụng Cupid App miễn phí</Col>
                    </Row>
                    <Row>
                        <Col className="icon">
                            <img src="/images/iosIcon.png" style={{ paddingRight: '20px' }} />
                            <img src="/images/ggplayIcon.png" style={{ paddingLeft: '20px' }} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default DownLoad;