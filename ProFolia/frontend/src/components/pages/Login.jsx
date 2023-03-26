import React, { useState } from "react";
import UserStore from "../../stores/UserStore";
import "../p.css"
export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    const resetForm = () => {
        setEmail("");
        setPass("");
        setButtonDisabled(false);
    }

    const doLogin = async () => {
        if (!email || !password) {
            return;
        }
        setButtonDisabled(true);

        try {
            let res = await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            let result = await res.json();
            if (result && result.success) {
                UserStore.isLoggedIn = true;
                UserStore.email = result.email;
            }
            else if (result && result.success === false) {
                resetForm();
                alert(result.msg);
            }
        }
        catch(e) {
            console.log(e);
            resetForm();
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}  action="{{ url_for('login') }}" method="POST">
                {/*<div class="msg">{{ msg }}</div>*/}
                <label htmlFor="email">email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">password</label>
                <input
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                />
                <button type="submit" onClick={() => doLogin()}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch("register")}>
                Don't have an account? Register here.
            </button>
        </div>
    );
};

export default Login;
