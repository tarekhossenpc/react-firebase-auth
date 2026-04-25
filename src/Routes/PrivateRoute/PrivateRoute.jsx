import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(user) return children
    return <Navigate state={location.pathname} to='/Login'></Navigate>
};

export default PrivateRoute;