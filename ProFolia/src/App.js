import './App.css';
import React from 'react'
import HomePage from './components/HomePage';
import MainPage from './components/MainPage/MainPage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
// import Header from './components/JobsPage/Header/Header';
import JobLists from "./components/JobsPage/Jobs/JobLists";
import JobDetails from "./components/JobsPage/Job-details/JobDetails";
// import JobsPage from './components/JobsPage/JobsPage';

import AddJobForm from './components/AddJobForm/AddJobForm';

import { Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      {/*<AddJobForm/>*/}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/submit-form' element={<AddJobForm />} />
        <Route path='/jobs' element={<JobLists />} />
        <Route path='/jobs/:position' element={<JobDetails />} />
      </Routes>
    </div>
  );
}
export default App;


