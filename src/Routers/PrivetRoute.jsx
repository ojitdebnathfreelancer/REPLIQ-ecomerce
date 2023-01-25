import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextBDFood } from '../ContextProvider/ContextProvider';

const PrivetRoute = ({ children }) => {
    const { user } = useContext(ContextBDFood);

    if (user) {
        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;