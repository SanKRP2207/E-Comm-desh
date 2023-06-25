import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import '../App.css';


const Nav = ()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

// this is lodout function
    const logout = ()=>{
        localStorage.clear();
        navigate('/singup')
    }
    return(
        <div className="Nav">
            <ul>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/delete">Delete Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                
                { /*first way  */
                /* <li>{ auth?<Link onClick={logout} to="/singup">Logout</Link>:<Link to="/singup">Sing Up</Link>}</li>

                <li><Link to="/login">Login</Link></li> */
                }
                {/*first way  */
                    auth  ? <li><Link onClick={logout} to="/singup">Logout</Link></li>:<><li><Link to="/singup">Sing Up</Link></li><li><li><Link to="/login">Login</Link></li></li></>
                }


            </ul>

        </div>
    )
        
}

export default Nav;