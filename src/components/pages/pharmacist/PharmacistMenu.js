import { Container, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';

export const PharmacistMenu = (props) => {
    const [data, setData] = useState('No result');

    return (
        <>
            <Container>
                {/* <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                            console.log(result?.text)
                            window.location.href = result?.text
                        }

                        if (!!error) {
                            console.info(error);
                        }
                    }}
                    style={{ width: '100%' }}
                /> */}
                <div>
                <Link to={"/pharmacist/patient_profile"}><Button variant="primary" type="submit">QR emulator</Button></Link>
                </div>
                <div>
                <Link to={"/pharmacist/help"}><Button variant="primary" type="submit">Help</Button></Link>
                </div>
            </Container>

        </>
    );
}