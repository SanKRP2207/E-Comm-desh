import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { EackEndLink } from "./EackEndLink";

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth && auth !== " ") {
            navigate('/');
        }
    }, [navigate]);

    const handlelogin = async (e) => {
        e.preventDefault();
        console.log(email, password);

        let result = await fetch(`${EackEndLink}/login`, {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'content-Type': 'application/json'
            }
        })
        result = await result.json();
        // console.log(result)

        if (result) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/');

        } else {
            alert("Please Enter corect detail");
        }

    }
    return (
        <div className="login" style={{ marginTop: '64px' }}>
            <h1>Login</h1>
            <form onSubmit={handlelogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter E-mail" required /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required /><br />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
export default Login;