import { Container, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";


export const PatientReceipts = () => {

    const [receipts, setReceipts] = useState([])

    //TODO fetch receipts

    return (
        <>
            <Link to={"/patient/menu"}><Button variant="primary" type="submit">Back</Button></Link>
            <Container>
                <h3>Your medicaments</h3>
                <img alt="..." />
                <div>
                    <ListGroup >
                    <Link to={"/patient/receipt_info"}>
                                <ListGroup.Item >HARDCORE EXAMPLE</ListGroup.Item>
                            </Link>
                        {receipts.map((receipt) => (
                            <Link to={"/patient/receipt_info"}>
                                <ListGroup.Item >Cras justo odio</ListGroup.Item>
                            </Link>
                        ))}
                    </ListGroup>
                </div>
            </Container>
        </>
    );
}