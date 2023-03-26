import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

axios.defaults.withCredentials = true;

ReactDOM.render(
    <React.StrictMode>
        <Router>
        <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
