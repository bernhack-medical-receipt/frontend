import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
//Auth
import { AuthPage } from './components/pages/auth/AuthPage';
import { LoginPage } from './components/pages/auth/LoginPage';
import { RegistrationPage } from './components/pages/auth/RegistrationPage';
import { NoMatchPage } from './components/pages/auth/NoMatchPage';
import { HomePage } from './components/pages/homepage/HomePage';

//Doctor
import { DoctorPage } from './components/pages/doctor/DoctorPage';
import { DoctorMenu } from './components/pages/doctor/DoctorMenu';
import { DoctorAddPatient } from './components/pages/doctor/DoctorAddPatient';
import { DoctorFindPatient } from './components/pages/doctor/DoctorFindPatient';
import { DoctorPatientProfile } from './components/pages/doctor/DoctorPatientProfile';
import { DoctorAddPatientReceipt } from './components/pages/doctor/DoctorAddPatientReceipt';
import { DoctorHelp } from './components/pages/doctor/DoctorHelp';

//Patient
import { PatientPage } from './components/pages/patient/PatientPage';

//Pharmacist
import { PharmacistPage } from './components/pages/pharmacist/PharmacistPage';


//the path of the route is camel_case (everything after the name of the enity)
//e.g. <Route path="menu_item" element={<EntityMenuItem />} />

const App = () => (
  <Router>
    <div>
      <Routes>

        <Route path="/" element={<HomePage />}>
          <Route path="doctor" element={<DoctorPage />}>
            <Route path="menu" element={<DoctorMenu />} />
            <Route path="add_patient" element={<DoctorAddPatient />} />
            <Route path="find_patient" element={<DoctorFindPatient />} />
            <Route path="patient_profile" element={<DoctorPatientProfile />} />
            <Route path="add_patient_receipt" element={<DoctorAddPatientReceipt />} />
            <Route path="help" element={<DoctorHelp />} />
          </Route>

          <Route path="patient" element={<PatientPage />}>

          </Route>
          <Route path="pharmacist" element={<PharmacistPage />}>

          </Route>
        </Route>

        <Route path="/auth" element={<AuthPage />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>

        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
    {/* <footer><Footer /></footer> */}
  </Router>
);

export default App;
