import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export const PatientMenu = () => {
    return (
        <>
            <Container>
                <h2>QR CODE</h2>
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