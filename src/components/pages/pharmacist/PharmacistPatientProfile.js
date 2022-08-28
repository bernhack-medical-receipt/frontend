import {Link, useParams} from "react-router-dom";
import {Button, Container, ListGroup} from "react-bootstrap";
import {useEffect, useState} from "react"
import axios from "axios";
import getCookie from '../../../utlis'

export const PharmacistPatientProfile = () => {
    const [patientReceipts, setPatientReceipts] = useState([])

    const [receipts, setReceipts] = useState([])
    const {id} = useParams();
    console.log("id", id)

    useEffect(() => {
        const headers = {Authorization: `Token ${getCookie("token")}`}

        axios.get(`https://med-api.mustafin.dev/api/v1/receipt/by_user/${id}`, {headers})
            .then(response => {
                console.log(response)
                setReceipts(response.data)
            })
            .catch(error => {
                console.error('Login error handle submit', error);
            });

    }, [])

    return (
        <>
            <Link to={"/pharmacist/menu"}><Button variant="primary" type="submit">Back</Button></Link>
            <Container>
                <h2>Patient: {receipts[0]?.user?.first_name} {receipts[0]?.user?.last_name}</h2>
                <div>
                    <h3>Active receipts</h3>
                    <ListGroup>
                        {
                            receipts.map((receipt) => (
                                <Link to={`/pharmacist/patient_receipt_info/${receipt.id}`}>
                                    <ListGroup.Item>

                                        {receipt.disease}

                                    </ListGroup.Item>
                                </Link>
                            ))
                        }
                    </ListGroup>
                </div>
            </Container>
        </>
    );
}