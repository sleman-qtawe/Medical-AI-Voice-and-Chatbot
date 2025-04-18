import React from "react";
import LoginSignup from "./components/logIn_signUp/login_signUp.jsx";
import RoutDrawerPatient from "./components/Navigations/RoutDrawerPatient.jsx";
import RoutDrawerDoctor from "./components/Navigations/RoutDrawerDoctor.jsx";
import DoctorProgram from "./components/doctorProgram/doctorProgram.jsx";
import AddDepartment from "./components/AddDepartment/addDepartment.jsx";
import { Routes, Route } from "react-router-dom";
import RoutDrawer from "./components/Navigations/RoutDrawerAdmin.jsx";
import CalendarPage from "./components/doctorProgram/CalenderPage.jsx";
import AppointmentsPage from "./components/doctorProgram/AppointmentsPage.jsx";
import SidebarPatient from "./components/Patient/SidebarPatient";


function App() {
  return (
    
  
   <Routes>
    <Route path="/" element={<LoginSignup />} />
    <Route path="/*" element={<RoutDrawer/>} />
    <Route path="/*" element={<RoutDrawerDoctor />} />
    <Route path="/*" element={<RoutDrawerPatient/>} />  
      <Route path="/" element={<CalendarPage />} />
      <Route path="/appointments/:date" element={<AppointmentsPage />} />
    <Route path="/" element={<AddDepartment />} />

    <Route path="/profile" element={<SidebarPatient />} />
        <Route path="/chat" element={<SidebarPatient />} />
        <Route path="/appointments" element={<SidebarPatient />} />
        <Route path="/logout" element={<SidebarPatient />} />
</Routes>


  );
}

export default App;