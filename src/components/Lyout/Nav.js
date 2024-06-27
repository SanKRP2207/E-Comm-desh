import React from "react";
import { Link, useNavigate } from 'react-router-dom';



const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    // this is lodout function
    const logout = () => {
        localStorage.clear();
        navigate('/singup')
    }
    return (
        <React.Fragment>
            <div style={{ position: 'fixed', height: '60px', width: '100%', marginTop: '-80px' }}>
                <div>
                    <img className="logoimg" alt="logo" src="data:image/png;base64,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" />
                </div>
                <div className="Nav" style={{ textDecoration: 'none', backgroundColor: '#61dafb' }}>
                    {auth ?

                        <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '15px' }}>

                            <Link to="/" style={{ textDecoration: 'none', paddingRight: '20px', color: 'black' }}>UaerSide</Link>

                            <Link to="/admin" style={{ textDecoration: 'none', paddingRight: '20px', color: 'black' }}>Admin Product</Link>
                            <Link to="/add" style={{ textDecoration: 'none', paddingRight: '20px', color: 'black' }}>Add Product</Link>
                            <Link to="/profile" style={{ textDecoration: 'none', paddingRight: '20px', color: 'black' }}>Profile</Link>
                            <Link onClick={logout} to="/singup" style={{ marginLeft: 'auto', textDecoration: 'none', color: 'black' }}>Logout {JSON.parse(auth).name}</Link>



                        </ul>
                        :

                        <div style={{ marginTop: '15px', textAlign: 'end', padding: '15px' }}>
                            <Link to="/singup" style={{ marginLeft: '15px', textDecoration: 'none' }}>Sing Up</Link>
                            <Link to="/login" style={{ marginLeft: '15px', textDecoration: 'none' }}>Login</Link>

                        </div>


                    }
                </div >
            </div >
        </React.Fragment >
    )

}

export default Nav;