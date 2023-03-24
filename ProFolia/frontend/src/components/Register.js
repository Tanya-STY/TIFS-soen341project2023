import React, { useState } from 'react'
import Axios from "axios";
import { useNavigate } from "react-router-dom";
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
    const [registerStatus, setRegisterStatus] = useState("");

    const register = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:5000/register", {
            email: email,
            fullname: fullname,
            password: password,
        }).then((response) => {
            // setRegisterStatus(response);
            // console.log(response);
            if(response.data.message){
                setRegisterStatus(response.data.message);
            }else{
                setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
            }
        })
    }




    //
    // const Register = async (e) => {
    //     e.preventDefault();
    //     console.log("register function called")
    //     try {
    //         await axios.post('http://localhost:5000/users', {
    //             fullname: fullname,
    //             email: email,
    //             password: password,
    //             confPassword: confPassword
    //         });
    //         history("/login");
    //     } catch (error) {
    //         if (error.response) {
    //             setMsg(error.response.data.msg);
    //         } else {
    //             console.log(error.message);
    //         }
    //     }
    // }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form">
                {/*<p className="has-text-centered">{msg}</p>*/}
                <label htmlFor="fullname">Full Name</label>
                <input
                    value={fullname}
                    onChange={(e) => {setFullname(e.target.value)}}
                fullname="fullname"
                id="fullname"
                placeholder="Your full name"
                />
                <label htmlFor="email">email</label>
                <input
                    value={email} onChange={(e) => {setEmail(e.target.value)}}
                type="email"
                placeholder="youremail@gmail.com"
                id="email"
                name="email"
                />
                <label htmlFor="password">password</label>
                <input
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                type="password"
                placeholder="********"
                id="password"
                name="password"
                />
                <label htmlFor="confPassword">confirm password</label>
                <input
                    value={confPassword}
                    onChange={(e) => {setConfPassword(e.target.value)}}
                type="password"
                placeholder="********"
                />
                <button type="submit" onClick={register}>Register</button>
                <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
            </form>
            <a className="pagelink" onClick={() => history("/login")}>
                Already have an account? Login here.
            </a>
        </div>
    );
}

export default Register