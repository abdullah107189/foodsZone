import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const { user, loader } = useContext(AuthContext)
    if (loader) {
        return <h1 className='3xl text-center'>loading</h1>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} replace to={'/login'}></Navigate>;
};

export default PrivateRoutes;