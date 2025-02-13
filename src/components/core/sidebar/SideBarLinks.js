import React from 'react';
import {sideBarLinks} from "../../../data/sideBar-links";
import {IoIosArrowForward} from "react-icons/io";
import {Link} from "react-router";
// import {NavLink} from "react-router-dom";

const SideBarLinks = () => {
    return (
        <div className={`flex   items-center justify-center text-black  scrollbar-hide`}>

            <div className={`flex flex-col items-start justify-center gap-0 transition-all duration-500     `}>

                {sideBarLinks.map((ele, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-start justify-center gap-1 mb-3
                            py-2 transition-all duration-200 w-full  group-hover:border-b-[0.126rem] group-hover:border-bordercolor `}>
                            <p className={`hidden group-hover:block text-graybg mb-2`}>
                                {ele.title}
                            </p>

                            <div className={` flex flex-col  items-center justify-center h-full w-full gap-5`}>
                            {ele.links.map((ele,index) => (


                                <Link to={`${ele.path}`}  key={index} className={` w-full `}
                                         // className(({isActive} ) => isActive ? `active` : `  `)
                                    >
                                <div
                                    key={index}
                                    className={ `group flex items-center justify-evenly hover:bg-bgcolor gap-5 
                                    rounded-full p-1 `}>
                                  <div className={` text-center group-hover:bg-transparent bg-bordercolor rounded-full p-[0.5rem] `}>
                                      {ele.icon}
                                  </div>

                                    <p className={`text-[15px] hidden group-hover:block text-graybg`}>
                                        {ele.name}
                                    </p>
                                    {
                                        ele.id===1 ?(<div className={   `bg-transparent`}> </div>): (
                                            <div className={`hidden group-hover:block`}>
                                            <IoIosArrowForward/>
                                            </div>)
                                    }

                                </div>

                                </Link>

                            ))
                            }
                        </div>
                            <div className={`w-full H-[0.063rem] bg-bordercolor`}></div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default SideBarLinks;