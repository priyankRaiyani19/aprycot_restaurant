import React from 'react';
import {newsData} from "../../../data/userProfile/newsData";

const News = ({isSidebarHovered}) => {
    return (
        <div className={` bg-white p-5 rounded-[24px] py-[10px] `}>

            <div>
                <h1 className={`font-semibold text-[23px] font-PlayfairDisplay`}>
                    News
                </h1>
            </div>

            <div className={`flex flex-col gap-2 mt-[1rem] `}>
                {
                    newsData.map((ele) => (

                        <div
                            key={ele.id}
                            className={`     `}>

                            <div className={`bg-graybg h-[1px] w-full`}></div>


                            <div className={`flex items-center gap-[24px]  `}>
                                <div className={`mt-[1rem] h-[5rem] w-[7rem]`}>
                                    <img src={ele.img} alt=""
                                         className={`h-[62px] w-[102px] `}
                                    />
                                </div>

                                <div className={`flex flex-col gap-2   `}>
                                    <p className={`font-bold text-[16px]`}>
                                        {ele.name}
                                    </p>
                                    <p className={` text-graybg `}>
                                        {ele.desc}
                                    </p>
                                </div>


                            </div>


                        </div>


                    ))
                }


            </div>


        </div>
    );
};

export default News;