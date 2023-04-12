import logo from "./logo.svg";
// import './App.css';
// import React, { useEffect } from 'react';
// import { observer } from 'mobx-react';
// import HomePage from './components/HomePage';

import "./App.css";

import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Homepage from "./components/HomePage";
import MainPage from "./components/MainPage/MainPage";
// import TypeUser from "./components/TypeUser";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import EmployerProfile from "./components/EmployerProfile/EmployerProfile";
import StudentProfile from "./components/StudentProfile/MainStudProfile";
import JobsPage from "./components/JobsPage/JobsPage";
import JobLists from "./components/JobsPage/Jobs/JobLists";
import JobDetails from "./components/JobsPage/Job-details/JobDetails";
import InterviewPage from "./components/interview/InterviewPage";
import InterviewForm from "./components/interview/InterviewForm";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/homepage" element={<Homepage />} />

      <Route path="/jobs/*" element={<JobsPage />} />
      <Route path="/employer-profile/*" element={<EmployerProfile />} />
      <Route path="/student-profile/*" element={<StudentProfile />} />

      {/* <Route path='/typeuser' element={<TypeUser />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/InterviewPage" element={<InterviewPage />} />
      <Route path="/InterviewForm" element={<InterviewForm />} />
      <Route path="/FAQ" element={<FAQ />} />

      {/*<Route path="/dashboard">*/}
      {/*  <Navbar/>*/}
      {/*  <Dashboard/>*/}
      {/*</Route>*/}
    </Routes>
    // </BrowserRouter>
  );
}

export default App;
