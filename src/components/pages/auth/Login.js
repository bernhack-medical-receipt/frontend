import { useRef, useState, useEffect } from "react"
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { Button, Container, Form} from 'react-bootstrap'
import axios from "axios";
import { setCookie } from "../../utilities/cookies";
import { getCookie } from "../../utilities/cookies";
//useEffect ->
                //checkAuth => should check the token and redirect 
//handleSubmit ->

export const Login = () => {

    const [role, setRole] = useState('') //doctor, patient, pharmacist

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    

    let navigate = useNavigate();
    const checkAuth = async () => {
        if (getCookie("token") === null || getCookie("token") === undefined) {
            return;
        }
        const headers = { Authorization: `Token ${getCookie("token")}` }
        axios.get('https://med-api.mustafin.dev/api/v1/users/me/', { headers })
            .then(response => {
                // setRole(`${response.data.role}`)
               
                if (response.data.role === "USER") {
                    // window.location = "/patient/menu";
                    navigate('/patient/menu')
                } if (response.data.role === "PHAR") {
                    navigate('/pharmacist/menu')
                } if (response.data.role === "DOC") {
                    navigate('/doctor/menu')
                } if (response.data.role === undefined) {
                    navigate('/auth/login')
                }

            })
            .catch(error => {
                console.error('Login error handle submit', error);
            });

    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username: email,
            password: password,
        }
        const headers = { 'Content-Type': 'application/json' }
        axios.post('https://med-api.mustafin.dev/api-token-auth/', user, { headers })
            .then(response => {
                setCookie("token", `${response.data.token}`, 1)
                checkAuth()
             
               
                
            })
            .catch(error => {
                console.error('Login error handle submit', error);
            });
    }


    useEffect(() => {
        checkAuth()
    }, [])

    
    
    

    if (role === '')
        return (
            <>
                <Container>
                    
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={onChangeEmail} type="email" placeholder="Enter email" />
                           

                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={onChangePassword} type="password" placeholder="Enter password" />
                           


                        </Form.Group>

                        
                        <Button variant="primary" type="submit">
                            Login
                        </Button>

                    </Form>

                    <Link to="/registration">registration</Link>
                </Container>
            </>
        );
    // else if (role === "USER") {
    //     return <Navigate replace to="/patient/menu" />;
    // } if (role === "PHAR") {
    //     return <Navigate replace to="/pharmacist/menu" />;
    // } if (role === "DOC") {
    //     return <Navigate replace to="/doctor/menu" />;
    // }
}