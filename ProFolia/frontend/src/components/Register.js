import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./p.css";
import "../App.css";

const Register = () => {
    const [fullname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();


    const Register = async (e) => {
        e.preventDefault();
        // console.log("register function called")
        try {
            await axios.post('http://localhost:5000/users', {
                fullname: fullname,
                email: email,
                password: password,
                confPassword: confPassword
            });
            history("/login");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={Register}>
                <p className="has-text-centered">{msg}</p>
                <label htmlFor="fullname">Full Name</label>
                <input
                    value={fullname}
                    onChange={(e) => setName(e.target.value)}
                fullname="fullname"
                id="fullname"
                placeholder="Your full name"
                />
                <label htmlFor="email">email</label>
                <input
                    value={email} onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="youremail@gmail.com"
                id="email"
                name="email"
                />
                <label htmlFor="password">password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
                id="password"
                name="password"
                />
                <label htmlFor="confPassword">confirm password</label>
                <input
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                type="password"
                placeholder="********"
                />
                <button type="submit">Register</button>
            </form>
            <a className="pagelink" onClick={() => history("/login")}>
                Already have an account? Login here.
            </a>
        </div>
    );
}

export default Register