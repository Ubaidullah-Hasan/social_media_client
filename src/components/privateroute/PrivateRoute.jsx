import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const currentUser = false;

    if(!currentUser) {
        return (
            <Navigate to={"/login"} state={true} />
        )
    }

    return children ;
};

export default PrivateRoute;