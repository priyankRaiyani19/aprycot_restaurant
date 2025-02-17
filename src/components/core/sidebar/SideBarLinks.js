import React, { useState } from "react";
import { sideBarLinks } from "../../../data/sideBar-links";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { NavLink} from "react-router";
import {FaCircle} from "react-icons/fa";
import SidebarToggle from "../../../hooks/sidebarToggle";

const SideBarLinks = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const{isSidebarHovered}=SidebarToggle
    console.log(isSidebarHovered);
    const toggleDropdown = (id) => {
        setActiveDropdown((prev) => (prev === id ? null : id));
    };
    const hideHandler = () =>{
        setActiveDropdown(null);
    }

    // Automatically close the dropdown when the sidebar is closed
   // useEffect(() => {
   //     if(!isSidebarHovered){
   //         setActiveDropdown(null);
   //     }
   // });

    return (
        <div className={`flex items-center justify-center text-black mt-5 px-5`}>
            <div className={`flex flex-col items-start justify-center transition-all duration-500`}>
                {sideBarLinks.map((ele, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-start justify-center w-full transition-all duration-200 group-hover:border-b-[0.126rem] group-hover:border-bordercolor`}
                    >
                        <p className={`hidden group-hover:block text-graybg mt-3`}>{ele.title}</p>

                        <div className={`flex flex-col items-center justify-center h-full w-full gap-5 p-2`}>
                            {ele.links.map((link, linkIndex) => (
                                <div key={linkIndex} className="w-full">
                                    {/* Main Link */}
                                    <NavLink
                                        to={`${link.path}`}
                                        key={linkIndex}
                                        className={`w-full `}
                                        onClick={(e) => {
                                            if (link.subLinks) {
                                                e.preventDefault(); // Prevent default navigation for dropdown links
                                                toggleDropdown(link.id);
                                            }
                                        }}

                                    >
                                        <div
                                            className={`group/parent flex items-center group-hover:justify-between  hover:bg-bgcolor gap-5 
                                    rounded-full p-1 `}
                                        >
                                            <div
                                                className={`text-center group-hover:bg-transparent group-hover:block fill-bgcolor group-hover/parent:fill-white
                                                   hidden bg-white rounded-full p-[0.5rem]`}
                                            >
                                                {link.icon}
                                            </div>
                                            <div
                                            className={`text-center group-hover:hidden   rounded-full p-[0.8rem]  ${link.id===1 ?"bg-bgcolor":"bg-sideBarIconBg"}  ` }
                                        >
                                                <img src={link.icon2} alt="" className={`w-[1.1rem] h-[1.1rem] text-black`}/>
                                        </div>

                                            <p className={`text-[15px] hidden group-hover:block text-graybg  group-hover/parent:text-white`}>{link.name}</p>

                                            <div className={`group-hover:block hidden text-graybg  group-hover/parent:text-white`}>
                                                {activeDropdown === link.id ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                            </div>
                                        </div>
                                    </NavLink>

                                    {/* Dropdown for Sub-Links */}
                                    {link.subLinks && activeDropdown === link.id && (
                                        <div
                                            className={`  mt-2 flex ml-8  flex-col gap-3 bg-white `} // Added left (pl-6) and top (mt-2) spacing
                                        >
                                            {link.subLinks.map((subLink, subIndex) => (
                                                <NavLink
                                                    to={`${subLink.path}`}
                                                    key={subIndex}
                                                    onClick={hideHandler}
                                                    className={`group/p2 flex items-center gap-5 p-2 bg-white hover:bg-bgcolor rounded-full`}>
                                                  <div className={`text-bgcolor group-hover/p2:text-white`}>
                                                      <FaCircle />
                                                  </div>
                                                    <p className={`text-sm text-grayfont group-hover/p2:text-white`}>{subLink.name}</p>
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBarLinks;
