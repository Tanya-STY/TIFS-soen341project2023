import React, { useState } from 'react'
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { redirect } from 'react-router-dom';
import "./p.css";
import "../App.css";

const Register = () => {
    // const [fullname, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confPassword, setConfPassword] = useState('');
    // const [msg, setMsg] = useState('');
    const history = useNavigate();
    //
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState('');
    const [selectedOption, setSelectedOption] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    const [shouldRedirect, setShouldRedirect] = useState(false);
    // const [msg, setMsg] = useState('');
    const [errors, setErrors] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }
        if (!fullname) {
            newErrors.fullname = "Full Name is required";
        }
        if (!password) {
            newErrors.password = "Password is required";
        } else if (!/^.{5,24}$/.test(password)) {
            newErrors.password = "Password is invalid";
        }
        if (password !== confPassword) {
            newErrors.confPassword = "Passwords do not match";
        }
        if (!selectedOption){
            newErrors.selectedOption = "Select an option"
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const register = (e) => {
        e.preventDefault();
        if (validateForm()) {
            Axios.post("http://localhost:5000/register", {
                email: email,
                fullname: fullname,
                password: password,
                type_of_user: selectedOption,
            }).then((response) => {
                // setRegisterStatus(response);
                 console.log(response);
                if(response.data.message){
                    if (selectedOption === "Student") {
                        history("/homepage");
                    } else if (selectedOption === "Employer") {
                        history("/employer");
                    }
                    setRegisterStatus(response.data.message);
                }else{

                    // setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
                 }
            });
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form">
                {/*<p className="has-text-centered">{msg}</p>*/}
                <label> Would you like to navigate the website as a: <br/>
                    <input
                        type="radio"
                        value="Student"
                        name="type_of_user"
                        checked={selectedOption === "Student"}
                        onChange={handleOptionChange}
                    />
                    Student
                </label>
                <label>
                    <input
                    type="radio"
                    value="Employer"
                    name="type_of_user"
                    checked={selectedOption === "Employer"}
                    onChange={handleOptionChange}
                    />
                    Employer
                </label> {errors.selectedOption && <p className="error">{errors.selectedOption}</p>}
                <label htmlFor="fullname"> <br/>Full Name</label>
                <input
                    value={fullname}
                    onChange={(e) => {setFullname(e.target.value)}}
                fullname="fullname"
                id="fullname"
                placeholder="Your full name"
                /> {errors.fullname && <p className="error">{errors.fullname}</p>}
                <label htmlFor="email">email</label>
                <input
                    value={email} onChange={(e) => {setEmail(e.target.value)}}
                type="email"
                placeholder="youremail@gmail.com"
                id="email"
                name="email"
                /> {errors.email && <p className="error">{errors.email}</p>}
                <label htmlFor="password">password</label>
                <input
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                type="password"
                placeholder="********"
                id="password"
                name="password"
                /> {errors.password && <p className="error">{errors.password}</p>}
                <label htmlFor="confPassword">confirm password</label>
                <input
                    value={confPassword}
                    onChange={(e) => {setConfPassword(e.target.value)}}
                type="password"
                placeholder="********"
                /> {errors.confPassword && <p className="error">{errors.confPassword}</p>}
                <button type="submit" onClick={register}>Register</button>
                <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
            </form>
            <a className="pagelink" onClick={()=> window.location.replace("/login")}>
                Already have an account? Login here.
            </a>
        </div>

    );
}

export default Register