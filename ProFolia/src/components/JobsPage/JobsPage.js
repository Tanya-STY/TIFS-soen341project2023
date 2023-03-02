import './JobsPage.css';


import Header from './Header/Header';
import JobLists from './Jobs/JobLists';
import JobDetails from './Job-details/JobDetails';

import { Routes, Route, Navigate } from 'react-router-dom'


function JobsPage() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to='/jobs' />} />
        <Route path='/jobs' element={<JobLists />} />
        <Route path='/jobs/:position' element={<JobDetails />} />
      </Routes>
    </div>
  );
}
export default JobsPage;


