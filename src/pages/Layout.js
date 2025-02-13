import React from 'react';
import {Outlet} from "react-router";
import NavBar from "../components/common/NavBar";
import SideBar from "./SideBar";
import Footer from "../components/common/Footer";
import useToggleSidebar from "../hooks/useToggleSidebar";

const Layout = () => {
    const {isSidebarHovered} = useToggleSidebar

    return (
        <div className="flex w-full h-[100vh] overflow-x-hidden  text-black relative">
            <SideBar/>
            <div
                className={`transition-all duration-500  flex-grow`}
            >
                <NavBar isSidebarHovered={isSidebarHovered}/>
                <Outlet/>
                <Footer isSidebarHovered={isSidebarHovered}/>
            </div>

        </div>
    );
};

export default Layout;