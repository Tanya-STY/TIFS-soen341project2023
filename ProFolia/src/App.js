import './App.css';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import JobLists from "./components/Jobs/JobLists";
import JobDetails from "./components/Job-details/JobDetails";

import { Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/jobs' />} />
        <Route path='/jobs' element={<JobLists />} />
        <Route path='/jobs/:position' element={<JobDetails />} />
      </Routes>
    </div>
  );
}
export default App;


