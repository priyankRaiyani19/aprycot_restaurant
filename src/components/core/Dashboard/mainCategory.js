import React from 'react';
import {mainCategory} from "../../../data/mainCategory";
import {IoIosAddCircle} from "react-icons/io";
import {FaRegStar, FaStar} from "react-icons/fa";

const MainCategory = ({isSidebarHovered}) => {
    return (
        <div
            className={`  flex  items-center justify-center
               ${isSidebarHovered ? " w-[408px] h-[70px] ml-[250px] p-[74px]  " : "w-[1028px] h-[238px]   p-[24px]"}
               mt-[100px]       
        gap-[40px]
        `}>
            {
                mainCategory.map((ele) => (


                    <div
                        className={` relative hover:bg-[#EA6A12] bg-white hover:text-white text-black flex flex-col items-center justify-center
                     gap-[44px] mt-[86px] rounded-[24px]  p-[24px] group
                     
                     ${isSidebarHovered ? "h-[262px] w-[200px] " : "h-[262px] w-[ 2262px]"}
                     
                     
                     `}
                         key={ele.id}>

                        <div className={` flex items-center justify-center absolute w-[170px] h-[170px] rounded-full mt-[-250px] mx-auto `} >
                            <img src={ele.img} alt=""
                                 className={` rounded-full 
                                 ${ele.id ==='3'? "h-[175px] w-[175px] ":"h-[150px] w-[150px]  "}
                                 `}
                            />
                        </div>

                        <div className={`flex flex-col mt-[80px] ml-[-40px]`}>
                            <p className={`text-[16px]`}>
                                {ele.name}
                            </p>
                            <p className={`flex text-[20px] group-hover:text-white text-[#EA6A12]` }>
                                <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
                            </p>
                        </div>

                        <div className={`flex items-center justify-center 
                         ${isSidebarHovered ?  "gap-[55px]" : "gap-[80px] "  }
                         
                         `}>
                            <p className={`text-[16px]  `}>
                                $7.29
                            </p>
                            <p>
                                <IoIosAddCircle/>
                            </p>
                        </div>




                    </div>
                    )
                )
            }


        </div>
    );
};

export default MainCategory;