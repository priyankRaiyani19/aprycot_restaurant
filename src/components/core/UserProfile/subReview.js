import React from 'react';
import {FaRegHeart, FaReply, FaUserCircle} from "react-icons/fa";

const SubReview = ({name}) => {
    return (
        <div className={`flex justify-between items-center `}>
            <div className={`flex justify-center items-center gap-5 `}>
                <FaUserCircle className={`h-[50px] w-[50px] mt-5 `}/>
                <div className={`flex flex-col justify-center leading-[20px] mt-5`}>
                    <p className={`text-[13px] font-bold`}>{name}</p>
                    <p className={`text-[13px] text-gray-500`}>Lorem ipsum dolor sit amet.</p>

                    <div className={`flex justify-center items-center text-[13px] gap-2 text-[#EA6A12] `}>
                        <div className={`flex justify-center items-center gap-2  `}>
                            <FaRegHeart/>
                            <p>Like</p>
                        </div>
                        <div  className={`flex justify-center items-center gap-2 `}>
                            <FaReply/>
                            <p> Reply</p>
                        </div>

                        <p>
                            Translate
                        </p>
                        <p className={`text-[13px] text-gray-500`}>
                            5 min
                        </p>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default SubReview;