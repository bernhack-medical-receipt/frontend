import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
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
    const [userName, SetUserName] = useState('')

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }

    useEffect(() => {
       
        const headers = {Authorization: `Token ${getCookie("token")}`}
            axios.get('https://med-api.mustafin.dev/api/v1/users/me/', {headers})
            .then(response => {   
            
              
           
                SetUserName(response.data.first_name)
                
            } )
            .catch(error => {
                console.error('Login error handle submit', error);
            });
    }, [])
    return (
        <>
            <Container style={{ 'padding': '15px' }}>
                <Row>
                    <Col md={4}><h3>Good evening, {userName}</h3></Col>
                    <Col md={{ span: 4, offset: 4 }} style={{ 'text-align': 'right' }}>prescription mate <Image
                        width={'32px'} src={'/logo.png'} /></Col>

                    <Button variant="primary" type="submit" onClick={logout}>Logout</Button>
                    
                </Row>
            </Container>

        </>
    );
}