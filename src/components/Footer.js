import {Col, Container, Image, Row} from "react-bootstrap";

export const Footer = () => {
    return (
        <>
            <Container style={{'padding': '15px'}}>
                <Row>
                    <Col md={{span: 12}} style={{'background': '#cccccc', 'text-align': 'center'}}>2022</Col>
                </Row>
            </Container>

        </>
    );
}