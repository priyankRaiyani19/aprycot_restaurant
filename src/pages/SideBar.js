import React from "react";
import Logo from "../assets/sidebar/mini_Logo.png";
import FullLogo from "../assets/sidebar/full_logo.png";
import SideBarLinks from "../components/core/sidebar/SideBarLinks";
import useToggleSidebar from "../hooks/useToggleSidebar";

const SideBar = () => {
    const { setIsSidebarHovered} = useToggleSidebar()
    return (

        <div
            className="sticky top-0 text-black bg-white
                hover:w-[257px] w-[120px] hover:h-[1000px] h-[875px]
             transition-all duration-500 group  "
            onMouseEnter={() => setIsSidebarHovered(true)}
            onMouseLeave={() => setIsSidebarHovered(false)}
        >
            <div className="flex flex-col justify-center items-center mt-2  pb-2 h-[75.01px]  borderb border-bordercolor ">
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
            <div className={`p-5`}>
                <SideBarLinks/>
            </div>



        </div>
    );
};

export default SideBar;
