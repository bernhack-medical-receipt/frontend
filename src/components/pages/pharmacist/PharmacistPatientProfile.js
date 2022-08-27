import { Link } from "react-router-dom";
import { Button, Container, ListGroup} from "react-bootstrap";
import {useState} from "react"
export const PharmacistPatientProfile = () => {
    const [patientReceipts, setPatientReceipts] = useState([])
    //TODO fetch the receipts for this user
    return (
        <>
            <Link to={"/pharmacist/menu"}><Button variant="primary" type="submit">Back</Button></Link>
            <Container>
                <h2>Name</h2>
                <Container>
                    <h3>Active receipts</h3>
                    <ListGroup >
                    <Link to={"/pharmacist/patient_receipt_info"}>
                                <ListGroup.Item >HARDCORE EXAMPLE</ListGroup.Item>
                    </Link>
                        {patientReceipts.map((patientReceipts) => (
                            <Link to={"/pharmacist/patient_receipt_info"}>
                                <ListGroup.Item >Cras justo odio</ListGroup.Item>
                            </Link>
                        ))}
                    </ListGroup>
                </Container>

                <Container>
                    <h3>Symptoms</h3>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </div>
                </Container>
            </Container>
        </>
    );
}