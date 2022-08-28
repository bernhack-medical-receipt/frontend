import { useRef, useState, useEffect } from "react"
import { Link, Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {Button, Container} from 'react-bootstrap'
import axios from "axios";


export const Login = () => {

    const [role, setRole] = useState('') //doctor, patient, pharmacist
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }

      function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        const expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    const checkAuth = async () => {
        //doesn't redirect when cookie is set
        if (getCookie("token") === null || getCookie("token")===undefined)
        {
            return;
        }
        const headers = {Authorization: `Token ${getCookie("token")}`}
        axios.get('https://med-api.mustafin.dev/api/v1/users/me/', {headers})
        .then(response => {   
            setRole(`${response.data.role}`)
            
        } )
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
        // https://med-api.mustafin.dev/api-token-auth/
        const user = {
            username: email,
            password: password,
        }
        const headers = {'Content-Type': 'application/json'}
        axios.post('https://med-api.mustafin.dev/api-token-auth/', user, {headers})
            .then(response => {
                setCookie("token", `${response.data.token}`, 1)
                checkAuth()
                if (role === "USER") {
                    window.location = "/patient/menu";
                } if (role === "PHAR") {
                    window.location = "/pharmacist/menu";
                } if (role === "DOC") {
                    window.location = "/doctor/menu";
                } 
            } )
            .catch(error => {
                console.error('Login error handle submit', error);
            });
    }

    useEffect(() => {
        checkAuth()
    }, [])

  const navigation = () => {
    console.log(role)
    if (role === "USER") {
        window.location = "/patient/menu";
    } if (role === "PHAR") {
        window.location = "/pharmacist/menu";
    } if (role === "DOC") {
        window.location = "/doctor/menu";
    } 
  }

   if (role === '')
    return (
        <>
            <Container>
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={onChangeEmail}/>
                <input type="text" onChange={onChangePassword}/>
                <button onClick={navigation}> 
                    
                      Login
                </button>
    
           
            </form>

    
            <Link to="/registration">registration</Link>
            </Container>
        </>
    );
    else if (role === "USER") {
        return <Navigate replace to="/patient/menu" />;
    } if (role === "PHAR") {
        return <Navigate replace to="/pharmacist/menu" />;
    } if (role === "DOC") {
        return <Navigate replace to="/doctor/menu" />;
    } 
}