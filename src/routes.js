import React from 'react';
import {Route, Routes,Navigate} from "react-router";
import Layout from "./pages/Layout";
import DashBoard from "./pages/DashBoard";
import UserProfile from "./pages/UserProfile";
import Error500 from "./pages/Error/Error500";
import Error404 from "./pages/Error/Error404";
import SignIn from "./pages/Auth/SignIn";
import Maintenance from "./pages/Maintenance";
import SignUp from "./pages/Auth/SignUP";
import ResetPassword from "./pages/Auth/ResetPassword";

import Success from "./pages/Auth/Success";

const RoutesProvider = () => {
    return (
        <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path='/' element={<Layout/>}>
                <Route path="/dashboard" element={<DashBoard/>}/>
                <Route path="user" element={<UserProfile/>}/>
            </Route>


            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/maintenance' element={<Maintenance/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/resetpassword' element={<ResetPassword/>}></Route>
            <Route path='/success' element={<Success/>}></Route>

            <Route path="*" element={<Error500/>}/>
            <Route path="/400" element={<Error404/>}/>
        </Routes>
    );
};

export default RoutesProvider;
