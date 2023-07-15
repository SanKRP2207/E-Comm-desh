// import { useState } from "react";
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const Singup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // here using useNavigate as a navigate
    const navigate = useNavigate();

    // when user singup once then it will not allow to go and get singup page
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/');
        }
    })

    // connecting to backend
    const collection = async () => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:4500/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'content-Type': 'application/json'
            }
        });
        result = await result.json()
        console.log(result);

        // storing in localStorage
        localStorage.setItem('user',JSON.stringify(result));
        // if data are store then navigate in below given route
        navigate('/');

    }

    return (
        <div className='singup'>
            <h1>Register</h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name' /><br />
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter E-mail' /><br />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' /><br />
            <button type='button' onClick={collection}>Sing Up</button>


        </div>
    )
}
export default Singup;