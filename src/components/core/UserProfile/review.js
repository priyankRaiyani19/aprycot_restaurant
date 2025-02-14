import React from 'react';
import {IoMdArrowDropdown} from "react-icons/io";
import {FaRegHeart, FaRegSmile, FaUserCircle} from "react-icons/fa";
import img1 from "../../../assets/userProfile/Scene01.png"
import {MdOutlineCameraAlt, MdOutlineShare} from "react-icons/md";
import {GoComment} from "react-icons/go";
import SubReview from "./subReview";

const Review = ({isActive}) => {
    return (
        <div className={`  bg-white p-8 py-10 rounded-[24px] gap-5 `}>
            <div className={`flex justify-between items-center `    }>
                <div className={`flex justify-center items-center gap-5 leading-[20px]  `}>
                    <FaUserCircle className={`h-[50px] w-[50px] `} />
                    <div>
                        <p className={`text-[1rem] font-bold`}>Wade Warren</p>
                        <p className={`text-[13px] text-[#EA6A12]`}>colleages</p>
                    </div>
                </div>
                <div className={`flex justify-center items-center gap-[1rem] `}>
                    <p className={`text-[13px]`}>29 min</p>
                    <div className={`text-[24px]`}>
                        <IoMdArrowDropdown/>
                    </div>
                </div>

            </div>

            <div className={`mt-5`}>
                <img src={img1} alt="" className={`rounded-lg ${isActive? "block" : "hidden"}   `} />
            </div>

           <div className={`${isActive? "block" : "hidden"}`}>
            <div className={`flex justify-between items-center text-[16px] mt-5 `}>
                <div className={`flex justify-center items-center gap-5 `}>
                    <div className={`flex justify-center items-center gap-2 `}>
                        <FaRegHeart />
                        <p>Like</p>
                    </div>
                    <div className={`flex justify-center items-center gap-2`}>
                        <GoComment />
                        <p>140</p>
                    </div>
                </div>
                <div className={`flex justify-center items-center gap-2 text-[#EA6A12] `} >
                    <div>
                        <MdOutlineShare />
                    </div>
                    <div>
                       99 Share
                    </div>
                </div>
            </div>
           </div>

            <div className={`h-[1px] bg-[#FBE1D0] mt-5     ${isActive? "block" : "hidden"} `}  ></div>


            <div className={`text-[1rem] text-grayfont  p-[1.5rem] `}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.        </p>
            </div>




            <div className={`h-[1px] bg-[#FBE1D0]`}  ></div>

            <div className={`${isActive? "hidden" : "block"}`}>
                <div className={`flex justify-between items-center text-[16px] mt-5 `}>
                    <div className={`flex justify-center items-center gap-5 `}>
                        <div className={`flex justify-center items-center gap-2 `}>
                            <FaRegHeart />
                            <p>Like</p>
                        </div>
                        <div className={`flex justify-center items-center gap-2`}>
                            <GoComment />
                            <p>140</p>
                        </div>
                    </div>
                    <div className={`flex justify-center items-center gap-2 text-[#EA6A12]  `} >
                        <div>
                            <MdOutlineShare />
                        </div>
                        <div>
                            99 Share
                        </div>
                    </div>
                </div>
            </div>


        <div className={`${isActive? "block" : "hidden"} flex flex-col gap-2`} >
            <SubReview name={"Paul Molive"}  />
            <SubReview name={"Robert Fox"}  />
        </div>

            <div className={`mt-5`}>
                <div className="flex items-center border-2 border-grayfont rounded-full h-[35px] p-[1.5rem] relative ">

                    <input
                        type="text"
                        placeholder="Lovely!"
                        className="bg-transparent text-grayfont ml-3 focus:outline-none w-full placeholder-gray-400 text-[1rem]"
                        aria-placeholder="Search input"
                    />
                   <div className={`flex gap-3`}>
                       <FaRegSmile  className="text-grayfont w-[1.5rem] h-[1.5rem]" />
                       <MdOutlineCameraAlt className="text-grayfont w-[1.5rem] h-[1.5rem]" />
                   </div>
                </div>
            </div>



        </div>
    );
};

export default Review;