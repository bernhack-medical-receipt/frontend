import { Container, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios  from "axios";


export const PatientReceipts = () => {

    const [receipts, setReceipts] = useState([])

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }

    useEffect(() => {
       
        const headers = {Authorization: `Token ${getCookie("token")}`}
            axios.get('https://med-api.mustafin.dev/api/v1/receipt/', {headers})
            .then(response => {   
            
              
                setReceipts(response.data.results[0].drugs)  
                console.log(response.data.results[0].drugs)
                
            } )
            .catch(error => {
                console.error('Login error handle submit', error);
            });
    }, [])
    

    //TODO fetch receipts

    return (
        <>
            <Link to={"/patient/menu"}><Button variant="primary" type="submit">Back</Button></Link>
            <Container>
                <h3>Your medicaments</h3>
                <img alt="..." src="../../../public/not_yet_handed_Drugs.png" />
                <div>
                    <ListGroup >

                        {
                        receipts.map((receipt) => (
                            <Link to={`/patient/receipt_info/${receipt.id}`}>
                                <ListGroup.Item >
                                 
                                     {receipt.title}
                                    
                            
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