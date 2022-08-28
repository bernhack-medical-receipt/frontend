import {Link, useParams} from "react-router-dom";
import {Button, Container, ListGroup} from "react-bootstrap";
import {useEffect, useState} from "react"
import getCookie from "../../../utlis";
import axios from "axios";

export const PharmacistPatientReceiptInfo = () => {

    const [receipts, setReceipts] = useState([])
    const {user_id, id} = useParams();

    console.log(id)
    console.log(user_id)
    // const id = params.id

    useEffect(() => {
        const headers = {Authorization: `Token ${getCookie("token")}`}

        axios.get(`https://med-api.mustafin.dev/api/v1/receipt/by_user/${user_id}`, {headers})
            .then(response => {
                console.log(response)
                setReceipts(Array.from(response.data.filter((el) => (el.user.id === user_id))))
                console.log(receipts)
            })
            .catch(error => {
                console.error('Login error handle submit', error);
            });

    }, [])


    return (
        <>
            <Link to={"/pharmacist/patient_profile"} className="back-btn"><Button variant="primary"
                                                                                  type="submit">Back</Button></Link>
            <Container>
                <h2>Content:</h2>
                {
                    receipts.map((receipt) => (
                        <div>
                            {receipt.prescribed_drugs.map((prescribed_drugs) => (
                                <div>
                                    Name: <b>{prescribed_drugs.drug.title}</b><p></p>
                                    Frequency: <b>{prescribed_drugs.frequency}</b>
                                </div>
                            ))
                            }

                        </div>


                    ))
                }
            </Container>

        </>
    );
}