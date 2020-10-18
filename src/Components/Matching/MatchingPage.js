import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './UserCards';
import Dislike from './Dislike';
import Like from './Like';

export default function MatchingPage () {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Dislike />
                </Col>
                <Col>
                    <Like />
                </Col>
            </Row>
        </Container>
    )
}