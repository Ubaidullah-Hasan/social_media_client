import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const path = location.pathname || '/';
    const currentUser = true; // todo


    if(!currentUser) {
        return (
            <Navigate to={"/login"} replace={true} state={{from: path}} />
        )
    }

    return children ;
};

export default PrivateRoute;