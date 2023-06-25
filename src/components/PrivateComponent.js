import React from "react";

import {Navigate, Outlet} from 'react-router-dom';

// before sinup you can not able to go others page
const PrivateComponent = ()=>{
    // get data from localStorage 
    const auth = localStorage.getItem('user');

    // if new then navigate to singup if not then get others page 
    return auth? <Outlet />:<Navigate to="/singup" />
}

export default PrivateComponent;