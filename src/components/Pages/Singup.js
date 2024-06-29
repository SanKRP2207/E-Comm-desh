// import { useState } from "react";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EackEndLink } from './EackEndLink';


const Singup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // here using useNavigate as a navigate
    const navigate = useNavigate();

    // when user singup once then it will not allow to go and get singup page
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    })

    // connecting to backend
    const collection = async (e) => {
        e.preventDefault();
        console.warn(name, email, password);
        let result = await fetch(`${EackEndLink}/register`, {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'content-Type': 'application/json'
            }
        });
        result = await result.json()
        console.log(result);

        // storing in localStorage
        localStorage.setItem('user', JSON.stringify(result));
        // if data are store then navigate in below given route
        
        navigate('/');


    }

    return (
        <div className='singup' style={{ marginTop: '64px' }}>
            <h1>Register</h1>

            <form onSubmit={collection}>
                {/* <label>Profile Picture</label><br/>  */}
                {/* <input type="file" onChange={(e) => setFile(e.target.files[0])}/>  <br /> */}
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name' required /><br />
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter E-mail' required /><br />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' required /><br />
                <button className='submit' type='submit'>Sing Up</button>
 

            </form>
        </div>
    )
}
export default Singup;