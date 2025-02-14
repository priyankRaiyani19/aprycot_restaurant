import React from 'react';
import {IoIosArrowForward} from "react-icons/io";
import {categoryMenuLinks} from "../../../data/dashboard/categoryMenulinks";


const TypesOfCategoryMenu = () => {
    return (<div className={`   flex  items-center justify-center gap-[1.5rem] p-5 `}>

            {categoryMenuLinks.map((ele, index) => (
                <div className={`group   rounded-[1.5rem] flex flex-col
                     items-center hover:bg-bgcolor2 bg-white cursor-pointer                      
                      gap-[1.5rem] p-5`} key={index}>

                    <div className={` items-center text-center group-hover:border-white group-hover:border-4 rounded-full `}>
                        <img src={ele.img} alt="not found"/>
                    </div>

                    <div className={`text-[16px] font-bold group-hover:text-white `}>
                        {ele.name}
                    </div>


                        <div className={` h-[0.063rem] w-[2rem]  group-hover:w-[3.188rem] group-hover:bg-white bg-bgcolor `}  ></div>



                    <p className={` h-[1.5rem] w-[1.5rem] p-[0.375rem] text-[0.75rem]  content-center 
                            text-white group-hover:bg-white group-hover:text-bgcolor  bg-bgcolor rounded-full`}>
                        <IoIosArrowForward/>
                    </p>

                </div>


            ))}


        </div>


    );
};


export default TypesOfCategoryMenu;