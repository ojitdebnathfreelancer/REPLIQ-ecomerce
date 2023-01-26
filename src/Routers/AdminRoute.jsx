import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Sheared/Loading/Loading';
import { ContextBDFood } from '../ContextProvider/ContextProvider';
import UseAdmin from '../Hooks/UseAdmin/UseAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(ContextBDFood);
    const location = useLocation();

    const [isAdmin, adminLoading] = UseAdmin(user?.email);


    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin?.isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;