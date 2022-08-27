import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
//Auth
import {AuthPage} from './components/pages/auth/AuthPage';
import {Login} from './components/pages/auth/Login';
import {Registration} from './components/pages/auth/Registration';
import {NoMatch} from './components/pages/auth/NoMatch';
import {HomePage} from './components/pages/homepage/HomePage';

//Doctor
import {DoctorPage} from './components/pages/doctor/DoctorPage';
import {DoctorMenu} from './components/pages/doctor/DoctorMenu';
import {DoctorAddPatient} from './components/pages/doctor/DoctorAddPatient';
import {DoctorFindPatient} from './components/pages/doctor/DoctorFindPatient';
import {DoctorPatientProfile} from './components/pages/doctor/DoctorPatientProfile';
import {DoctorAddPatientReceipt} from './components/pages/doctor/DoctorAddPatientReceipt';
import {DoctorHelp} from './components/pages/doctor/DoctorHelp';

//Patient
import {PatientPage} from './components/pages/patient/PatientPage';
import {PatientHistory} from './components/pages/patient/PatientHistory';
import {PatientMenu} from './components/pages/patient/PatientMenu'
import {PatientReceiptInfo} from './components/pages/patient/PatientReceiptInfo'
import {PatientReceiptReport} from './components/pages/patient/PatientReceiptReport'
import {PatientReceipts} from './components/pages/patient/PatientReceipts'


//Pharmacist
import {PharmacistPage} from './components/pages/pharmacist/PharmacistPage';
import {PharmacistMenu} from './components/pages/pharmacist/PharmacistMenu';
import {PharmacistHelp} from './components/pages/pharmacist/PharmacistHelp';
import {PharmacistPatientProfile} from './components/pages/pharmacist/PharmacistPatientProfile';
import {PharmacistPatientReceiptInfo} from './components/pages/pharmacist/PharmacistPatientReceiptInfo';
import {Col, Container, Row} from "react-bootstrap";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";


//the path of the route is camel_case (everything after the name of the enity)
//e.g. <Route path="menu_item" element={<EntityMenuItem />} />

const App = () => {

    const [success, setSuccess] = useState(false);

    return (
        <Container>
            <Header/>
            <Row>
                <Col xs={{span: 9, offset: 3}}>
                    <Router>
                    <Routes>

                        <Route path="/" element={<HomePage/>}>
                            <Route path="doctor" element={<DoctorPage/>}>
                                <Route path="menu" element={<DoctorMenu/>}/>
                                <Route path="add_patient" element={<DoctorAddPatient/>}/>
                                <Route path="find_patient" element={<DoctorFindPatient/>}/>
                                <Route path="patient_profile" element={<DoctorPatientProfile/>}/>
                                <Route path="add_patient_receipt" element={<DoctorAddPatientReceipt/>}/>
                                <Route path="help" element={<DoctorHelp/>}/>
                            </Route>

                            <Route path="patient" element={<PatientPage/>}>
                                <Route path="menu" element={<PatientMenu/>}/>
                                <Route path="history" element={<PatientHistory/>}/>
                                <Route path="receipt_info" element={<PatientReceiptInfo/>}/>
                                <Route path="receipt_report" element={<PatientReceiptReport/>}/>
                                <Route path="receipts" element={<PatientReceipts/>}/>

                            </Route>
                            <Route path="pharmacist" element={<PharmacistPage/>}>
                                <Route path="menu" element={<PharmacistMenu/>}/>
                                <Route path="help" element={<PharmacistHelp/>}/>
                                <Route path="patient_profile" element={<PharmacistPatientProfile/>}/>
                                <Route path="patient_receipt_info" element={<PharmacistPatientReceiptInfo/>}/>
                            </Route>
                        </Route>

                        <Route path="/auth" element={<AuthPage/>}>
                            <Route path="login" element={<Login/>}/>
                            <Route path="registration" element={<Registration/>}/>
                        </Route>

                        <Route path="*" element={<NoMatch/>}/>
                    </Routes>
                    {/* <footer><Footer /></footer> */}
                </Router>
                </Col>

            </Row>
            <Footer/>
        </Container>
    );
}

export default App;
