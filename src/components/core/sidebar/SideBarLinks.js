import React from 'react';
import {sideBarLinks} from "../../../data/sideBar-links";
import {IoIosArrowForward} from "react-icons/io";

const SideBarLinks = () => {
    return (
        <div className={`flex z-[3000] flex-col w-full h-full gap-[50px]  text-black  scrollbar-hide`}>

            <div className={`flex flex-col items-start justify-center gap-0 transition-all duration-500     `}>

                {sideBarLinks.map((ele, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-start justify-center gap-5 mb-3 
                            group-hover:border-b-2 py-2 transition-all duration-200`}>
                            <p className={`font-bold hidden group-hover:block text-gray-500`}>
                                {ele.title}
                            </p>
                            {ele.links.map((ele,index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-evenly w-full hover:bg-orange-200 gap-5 
                                    rounded-full p-3`}>
                                    {ele.icon}
                                    <p className={`text-[15px] font-semibold  hidden group-hover:block text-gray-500`}>
                                        {ele.name}
                                    </p>
                                    {
                                        ele.id===1 ?(<div></div>): (
                                            <div className={`hidden group-hover:block`}>
                                            <IoIosArrowForward/>
                                            </div>)
                                    }
                                </div>
                            ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SideBarLinks;