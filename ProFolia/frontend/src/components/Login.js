import React, { useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [msg, setMsg] = useState('');
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
    }).then((response) => {
        if(response.data.message){
            setLoginStatus(response.data.message);
            window.location.replace("/homepage")
        }else{
            setLoginStatus(response.data[0].email);
        }
    })
}

    // const Auth = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post('http://localhost:5000/login', {
    //             email: email,
    //             password: password
    //         });
    //         history("/dashboard");
    //     } catch (error) {
    //         if (error.response) {
    //             setMsg(error.response.data.msg);
    //         }
    //     }
    // }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form className="box">
                                {/*<p className="has-text-centered">{msg}</p>*/}
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button type="submit" onClick={login}>Login</button>
                                    <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login