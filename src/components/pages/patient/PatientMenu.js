import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
export const PatientMenu = () => {
    return (
        <>
            <Container>
                <h2>QR CODE</h2>
                <div style={{ background: 'white', padding: '16px' }}>
                    <QRCode value={'https://med.mustafin.dev/api/v1/receipt/by_user/123/'} />
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