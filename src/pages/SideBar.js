import React from "react";
import Logo from "../assets/sidebar/mini_Logo.png";
import FullLogo from "../assets/sidebar/full_logo.png";
import SideBarLinks from "../components/core/sidebar/SideBarLinks";

const SideBar = ({onHoverChange}) => {
    return (

        <div
            className="sticky top-0 text-black bg-white border-r-2
                border-black hover:w-[257px] w-[120px] hover:h-[1000px] h-[875px]
             transition-all duration-500 group  "
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
        >
            <div className="flex items-center justify-center mt-2 border-b-2 pb-2 h-[75.01px] ">
                <img
                    src={Logo}
                    alt="Mini Logo"
                    className="group-hover:hidden w-10 h-auto"
                />
                <img
                    src={FullLogo}
                    alt="Full Logo"
                    className="hidden group-hover:block w-24 h-auto"
                />
            </div>
            <div className="flex flex-col w-full h-[100vh] px-3 z-[300]">
                <SideBarLinks/>
            </div>
        </div>
    );
};

export default SideBar;
