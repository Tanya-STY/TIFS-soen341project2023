import React, { useState } from "react";
import '../p.css'
export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [fullname, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <br/> <br/>
            <form className="register-form" onSubmit={Register}>
                <p className="has-text-centered">{msg}</p>
                <label htmlFor="fullname">Full Name</label>
                <input
                    value={fullname} onChange={(e) => setName(e.target.value)} />
                    fullname="fullname"
                    id="fullname"
                    placeholder="Your full name"
                />
                <label htmlFor="email">email</label>
                <input
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">password</label>
                <input
                    value={password} onChange={(e) => setPass(e.target.value)} />
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                />
                <label htmlFor="confPassword">password</label>
                <input
                    value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                type="password"
                placeholder="********"
                id="password"
                name="password"
                />
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
                Already have an account? Login here.
            </button>
        </div>
    );
};

export default Register;