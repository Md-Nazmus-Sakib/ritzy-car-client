import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    if (loading) {
        return <div className='my-32 flex justify-center items-center w-full h-screen'>
            <progress className="progress progress-secondary mx-auto w-56"></progress>
        </div>
    }
    if (user) {
        return children;
    }
    return (<Navigate to={'/logLayout/login'} state={{ form: location }} replace></Navigate>);
};

export default PrivateRoute;