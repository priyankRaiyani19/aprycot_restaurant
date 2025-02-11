import React from 'react';
import {categoryMenuLinks} from "../../../data/dashboard/categoryMenulinks";
import {IoIosArrowForward} from "react-icons/io";

const TypesOfCategoryMenu = ({isSidebarHovered}) => {
    return (
        <div
        className={`   flex  items-center justify-center
               ${isSidebarHovered ? " w-[828px] h-[190px]  ml-[50px]  " : "w-[1028px] h-[238px]"}
               p-[24px]
        
        gap-[40px]
        `}>
            {
                categoryMenuLinks.map((ele, index) => (

                    <div className={`group   rounded-[24px] flex flex-col
                     items-center hover:bg-[#EA6A12] cursor-pointer bg-white 
                       ${isSidebarHovered ? "  h-[190px]" : "w-[900px] h-[236px]"}
                     
                      gap-[24px] p-5`} key={index}>

                        <div className={`h-[236px] w-[1,028px] items-center text-center`}>
                            <img src={ele.img} alt=""
                            className={`group-hover:border-4
                             ${isSidebarHovered ?"  h-[44px] w-[64px] " : "  h-[64px] w-[64px] "}
                            group-hover:border-white rounded-full`}/>
                        </div>

                        <div className={`text-[16px] group-hover:text-white `}>
                            {ele.name}
                        </div>

                        <hr className={`w-[32px]  group-hover:w-[51px] group-hover:bg-white bg-[#EA6A12] `}>

                        </hr>

                        <p className={` h-[24px] w-[24px] p-[6px] text-[12px]  content-center 
                            text-white group-hover:bg-white group-hover:text-[#EA6A12]      bg-[#EA6A12] rounded-full`}>
                            <IoIosArrowForward/>
                        </p>

                    </div>




                ))
            }





        </div>
    );
};

export default TypesOfCategoryMenu;