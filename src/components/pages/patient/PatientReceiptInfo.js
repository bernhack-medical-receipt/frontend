import { useState, useEffect } from "react";
import { Container, ListGroup, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import axios from "axios";
import {useParams} from 'react-router-dom'
export const PatientReceiptInfo = () => {
    // const [idD, setIdD] = useState();
    const {id} = useParams()
    // const {idD} = useParams()

    const [drug, setDrug] = useState('')


    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }

    //   const urlParams = window.location.href.split(":");
    //   setIdD(urlParams[urlParams.length-1])
    
    useEffect(() => {
    const headers = {Authorization: `Token ${getCookie("token")}`}
        axios.get(`https://med-api.mustafin.dev/api/v1/receipt/${id}/`, {headers})
        .then(response => {   
            
            setDrug(response.data.drugs[id-1])
            console.log(drug)
            
            
        } )
        .catch(error => {
            console.error('Login error handle submit', error);
        });
    },[] )
    return (
         <>
        <Link to={"/patient/receipts"}><Button variant="primary" type="submit">Back</Button></Link>
            <Container>
                <h2>{drug.title}</h2>
                <Container>
                    <h3>
                        Category
                    </h3>
                    <div>
                        {drug.category}
                    </div>
                </Container>
                <Container>
                    <h3>
                        How to use it
                    </h3>
                    <div>
                         {drug.application}
                    </div>
                </Container>
                <Container>
                    <h3>
                       Ingredients
                    </h3>
                    
                    <div>
                       {drug.ingredients}
                    </div>
                    <Link to={'../receipt_report'}>
                    <Button variant="danger" type="submit">
                    Submit
                    </Button>
                    </Link>
                </Container>
            </Container>

        </>
    );
}