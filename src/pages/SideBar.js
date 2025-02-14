import React from "react";
import Logo from "../assets/sidebar/mini_Logo.png";
import FullLogo from "../assets/sidebar/full_logo.png";
import SideBarLinks from "../components/core/sidebar/SideBarLinks";
import SidebarToggle from "../hooks/sidebarToggle";


const SideBar = () => {
    const{setIsSidebarHovered}=SidebarToggle

    return (

        <div
            className="sticky top-0 text-black bg-white
                hover:w-[257px] w-[120px]
             transition-all duration-200 group  "
            onMouseEnter={() => setIsSidebarHovered(true)}
            onMouseLeave={() => setIsSidebarHovered(false)}
        >
            <div className="flex flex-col justify-center items-center  p-3   border-b border-bordercolor ">
                <img
                    src={Logo}
                    alt="Mini Logo"
                    className="group-hover:hidden h-auto "
                />
                <img
                    src={FullLogo}
                    alt="Full Logo"
                    className="hidden group-hover:block h-auto"
                />

            </div>


                            <SideBarLinks/>




        </div>
    );
};

export default SideBar;
