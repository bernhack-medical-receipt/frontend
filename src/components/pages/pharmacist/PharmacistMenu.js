import {Container, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import React, {useState} from 'react';

export const PharmacistMenu = () => {

    return (
        <>
            <Container>
                <div>
                    <Link to={"/pharmacist/scanner"}><Button variant="primary" type="submit">QR code
                        scanner</Button></Link>
                </div>
                <div>
                    <Link to={"/pharmacist/help"}><Button variant="primary" type="submit">Help</Button></Link>
                </div>
            </Container>

        </>
    );
}