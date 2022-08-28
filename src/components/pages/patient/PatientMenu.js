import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";
import axios from "axios"
export const PatientMenu = () => {
    const [userId, SetUserId] = useState('')

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }

    useEffect(() => {
       
        const headers = {Authorization: `Token ${getCookie("token")}`}
            axios.get('https://med-api.mustafin.dev/api/v1/users/me/', {headers})
            .then(response => {   
            
              
             
                SetUserId(response.data.id)
            } )
            .catch(error => {
                console.error('Login error handle submit', error);
            });
    }, [])
    return (
        <>
            <Container>
                <h2>QR CODE</h2>
                <div style={{ background: 'white', padding: '16px' }}>
                    <QRCode value={`https://med.mustafin.dev/pharmacist/patient_profile/${userId}/`} />
                    
                </div>
                <Link to={'../receipts'}>
                    <Button variant="primary" type="submit">    
                    Receipts
                </Button>
                </Link>
                <Link to={'../history'}>
                    <Button variant="primary" type="submit">    
                    History
                </Button>
                </Link>
            </Container>
        </>
    );
}