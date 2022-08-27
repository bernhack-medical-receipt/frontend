import { Container, ListGroup, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

export const PatientReceiptInfo = () => {
    return (
        <>
        <Link to={"/patient/receipts"}><Button variant="primary" type="submit">Back</Button></Link>
            <Container>
                <h2>Name of the prescription</h2>
                <Container>
                    <h3>
                        Description
                    </h3>
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
                <Container>
                    <h3>
                        How to use it
                    </h3>
                    <div>
                        <ListGroup as="ol" numbered>
                            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Container>
                <Container>
                    <h3>
                       Side effects
                    </h3>
                    <Button variant="danger" type="submit">
                    Submit
                </Button>
                    <div>
                        <ListGroup as="ul" numbered>
                            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Container>
            </Container>

        </>
    );
}