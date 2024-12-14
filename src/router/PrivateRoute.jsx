import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { div } from 'framer-motion/client';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <div className='flex justify-center mt-28'><span className="loading loading-infinity loading-lg "></span></div>;
    }
    
    if(user){
        return children;
    }
    return <Navigate to='/signin' state={location?.pathname}></Navigate>
};

export default PrivateRoute;