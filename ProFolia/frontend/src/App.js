import logo from './logo.svg';
// import './App.css';
// import React, { useEffect } from 'react';
// import { observer } from 'mobx-react';
// import HomePage from './components/HomePage';
// import MainPage from './components/MainPage/MainPage';
// import Login from './components/pages/Login';
// import Register from './components/pages/Register';
// // import Header from './components/JobsPage/Header/Header';
// import JobLists from "./components/JobsPage/Jobs/JobLists";
// import JobDetails from "./components/JobsPage/Job-details/JobDetails";
// // import JobsPage from './components/JobsPage/JobsPage';
// import UserStore from "./stores/UserStore";
//
// import AddJobForm from './components/AddJobForm/AddJobForm';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
      // <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
          {/*<Route path="/dashboard">*/}
          {/*  <Navbar/>*/}
          {/*  <Dashboard/>*/}
          {/*</Route>*/}
        </Routes>
      // </BrowserRouter>
  );
}

export default App;

// return (
//     <div>
//       {/*<Login/>*/}
//       {/*<AddJobForm/>*/}
//       <Routes>
//         <Route path='/' element={<MainPage />} />
//         <Route path='/home' element={<HomePage />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/submit-form' element={<AddJobForm />} />
//         <Route path='/jobs' element={<JobLists />} />
//         <Route path='/jobs/:position' element={<JobDetails />} />
//       </Routes>
//     </div>
//   );
