import {Col, Container, Image, Row} from "react-bootstrap";

export const Header = () => {
    return (
        <>
            <Container style={{'padding': '15px'}}>
                <Row>
                    <Col md={4}><h3>Good evening, Ben</h3></Col>
                    <Col md={{span: 4, offset: 4}} style={{'text-align': 'right'}}>prescription mate <Image
                        width={'32px'} src={'logo.png'}/></Col>
                </Row>
            </Container>

        </>
    );
}