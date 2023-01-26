import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextBDFood } from '../ContextProvider/ContextProvider';
import Loading from '../Sheared/Loading/Loading';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(ContextBDFood);

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;