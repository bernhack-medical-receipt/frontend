import { Container, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import React, { useState } from 'react';
 import { QrReader } from 'react-qr-reader';

export const PharmacistScanner = (props) => {
    const [data, setData] = useState('No result');

    return (
        <>
            <Container>
                <QrReader
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
                    constraints={{
                        facingMode: 'environment'
                    }}
                />
                <div>
                <Link to={"/pharmacist/scanner"}><Button variant="primary" type="submit">Back</Button></Link>
                </div>
            </Container>

        </>
    );
}