import React from 'react';
import {FaRegHeart, FaReply, FaUserCircle} from "react-icons/fa";

const SubReview = ({name}) => {
    return (
        <div className={`flex justify-between items-center `}>
            <div className={`flex justify-center items-center gap-[1.5rem] p-[1rem] `}>
                <FaUserCircle className={`h-[3rem] w-[3rem] `}/>
                <div className={`flex flex-col justify-center gap-[0.1rem] `}>
                    <p className={`text-[13px] font-bold`}>{name}</p>
                    <p className={`text-[13px] text-grayfont`}>Lorem ipsum dolor sit amet, consectetur elit.</p>

                    <div className={`flex justify-start items-center text-[13px] gap-2 text-[#EA6A12] `}>
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
                        <p className={`text-[13px] text-grayfont`}>
                            5 min
                        </p>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default SubReview;