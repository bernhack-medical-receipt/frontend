import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Header = () => {
    
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        const expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    const logout = () => {
        setCookie("token", "null", -1)
        window.location = "/auth/login"
        
    }

    return (
        <>
            <Container style={{ 'padding': '15px' }}>
                <Row>
                    <Col md={4}><h3>Good evening, Ben</h3></Col>
                    <Col md={{ span: 4, offset: 4 }} style={{ 'text-align': 'right' }}>prescription mate <Image
                        width={'32px'} src={'/logo.png'} /></Col>

                    <Button variant="primary" type="submit" onClick={logout}>Logout</Button>
                    
                </Row>
            </Container>

        </>
    );
}