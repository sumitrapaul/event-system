/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const navigate=useNavigate()

    const {user, loading} =useContext(AuthContext)

    if(loading) return <span className="loading loading-spinner text-primary loading-lg text-center"></span>

    if(!user?.email){
        return <Navigate to='/login'/>
    }
    return children;
};

export default PrivateRoute;