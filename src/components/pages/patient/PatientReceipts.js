import {Container, Row, Table} from "react-bootstrap";


export const PatientReceipts = () => {
    return (
        <>
            <Container>
                <Row><h2>History</h2></Row>
                <Row>
                    <Table striped>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Date issued</th>
                            <th>Disease name</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
            </>
            );
            }