import React from 'react'
import { Container, Col, Row} from 'react-bootstrap';
import FirstUser from '../Components/FirstUser'
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard(){
    return (
        <Container>
            <br/><br/>
            <h1>Welcome to DwellN!</h1>
            <br/><br/>
            <Row>
                <Col>
                    <h2><b>The Story:</b></h2>
                    <br/>
                    <h4>It started with a story about potatoes.
                        My roommate left a sack of potatoes in a
                        kitchen cabinet for months without telling
                        anyone. Left with a toxic stench and the
                        memory of taking them to the trash with my
                        bare hands, I developed DwellN to make sure
                        no one faces the same fate. Have fun!
                    </h4>
                </Col>
                <Col>
                    <h2><b>Register:</b></h2>
                    <br/>
                    <FirstUser />
                    <br/><br/>
                    <br/><br/>
                </Col>
            </Row>
        </Container>
    )
}
export default Dashboard