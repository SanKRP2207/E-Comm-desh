import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const handlelogin = async () => {
        console.log(email, password);

        let result = await fetch('http://localhost:4500/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result)

        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/');

        } else {
            alert("Please Enter corect detail");
        }



    }
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter E-mail" /><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" /><br />
            <button type="button" onClick={handlelogin}>Submit</button>
        </div>
    )
}
export default Login;