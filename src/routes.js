import React from 'react';
import {Route, Routes} from "react-router";
import Layout from "./pages/Layout";
import DashBoard from "./pages/DashBoard";
import UserProfile from "./pages/UserProfile";
import Error500 from "./pages/Error/Error500";
import Error404 from "./pages/Error/Error404";

const RoutesProvider = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path="dashboard" element={<DashBoard/>}/>
                <Route path="user" element={<UserProfile/>}/>
            </Route>


            <Route path='/signin'></Route>
            <Route path='/signup'></Route>
            <Route path="*" element={<Error500/>}/>
            <Route path="/400" element={<Error404/>}/>
        </Routes>
    );
};

export default RoutesProvider;