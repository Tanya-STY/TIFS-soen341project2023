import './JobsPage.css';
import React from 'react';


import Header from './Header/Header';
import JobLists from './Jobs/JobLists';
import JobDetails from './Job-details/JobDetails.jsx';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function JobsPage() {
  return (
    <div>
      <Header/>
      
        <Routes>
        {/* <Route path='/' element={<Navigate to='/jobs' />} /> */}
        <Route path="/" element={<JobLists />} />
        <Route path=":position" element={<JobDetails />} />
      </Routes>  
    </div>
  );
}
export default JobsPage;
