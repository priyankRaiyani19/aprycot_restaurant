import React, {useState} from 'react';
import {trendingOrderLinks} from "../../../data/dashboard/trendingOrderLinks";
import {smallCategories} from "../../../data/dashboard/smallCategories";
import {IoIosAddCircle, IoIosArrowDroprightCircle} from "react-icons/io";

const TrendingOrder = () => {

    const [selectedCategory, setSelectedCategory] = useState("Burgers");

    return (
        <div className={` flex gap-[3rem]  p-5`}>

            <div className={`flex flex-col px-8 w-[70%] gap-[2.5rem]`}>

                <div className={`relative flex justify-between   `}>

                    <p className={`font-PlayfairDisplay text-[2.5rem] font-bold`}>Trending Orders</p>

                    <div className={`flex items-center justify-center gap-2`}>
                        <p>
                            View All
                        </p>
                        <p className={`text-[1.5rem] text-bgcolor`}>
                            <IoIosArrowDroprightCircle/>

                        </p>
                    </div>
                </div>

                <div className={` flex `}>

                    <div className={`grid grid-cols-3 items-center gap-[3.5rem] relative`}>

                        {trendingOrderLinks.map((ele) => (

                            <div key={ele.id}
                                 className={`flex  hover:text-white hover:bg-bgcolor2  
                                  bg-white rounded-[1.5rem]  p-5 relative  w-[15.125rem] group`}>

                                <div className={`flex  flex-col gap-[1rem] hover:text-white`}>

                                    <p className={`text-[0.813rem] text-bgcolor group-hover:text-white`}>
                                        👑 Top of the week
                                    </p>
                                    <p className={`text-[1rem] font-bold`}>
                                        Italian Salad
                                    </p>

                                    <p className={`text-[0.813rem] group-hover:text-white text-graybg`}>
                                        {ele.cal} calories
                                    </p>

                                    <hr className={`w-[2rem] `}/>

                                    <p className={`text-[13px] text-graybg group-hover:text-white`}>
                                        {ele.number} persons
                                    </p>
                                    <div className={`flex items-center gap-[28px] `}>
                                        < p className={`text-[16px] font-bold group-hover:text-white text-bgcolor`}>$7.49</p>

                                        <IoIosAddCircle className={`h-[24px] w-[24px] text-bgcolor   group-hover:text-white  `}/>

                                    </div>
                                </div>
                                <div className={`absolute mt-[1.5rem] 
                              
                                `}
                                     key={ele.id}>
                                    <img src={ele.img} alt="" className={` z-[500] 
                                    ${ele.id >3 ?"ml-[4rem]" :"ml-[6rem] "}
                          
                                    `}/>
                                </div>
                            </div>))}
                    </div>
                </div>


            </div>


            <div className={`p-5 w-[30%] bg-opacity-100 backdrop-blur-[5px] 
            bg-white shadow-lg rounded-[1.5rem]  max-w-md 
     `}>
                <div className={`flex flex-col gap-[1.5rem]`}>
                    <div className="flex justify-between items-center ">
                        <h2 className="text-[1.5rem] font-semibold font-PlayfairDisplay">Categories</h2>

                        <div className={`flex items-center justify-center gap-2`}>

                            <p> View All</p>

                            <p className={`text-[1.5rem] text-bgcolor`}>
                                <IoIosArrowDroprightCircle className={`text-bgcolor`}/>

                            </p>
                        </div>
                    </div>
                    <div className={`h-[1px] bg-bordercolor `}></div>
                    <div className="flex z-50 flex-wrap gap-x-[1rem] gap-y-[1.5rem] ">
                        {smallCategories.map((ele, index) => (<button
                            key={index}
                            onClick={() => setSelectedCategory(ele)}
                            className={`px-4 py-2 rounded-full text-sm 
                         ${selectedCategory === ele ? "bg-bgcolor text-white"
                                : "border border-bgcolor text-bgcolor hover:bg-bgcolor hover:text-white"}`}
                        >
                            {ele.name}
                        </button>))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TrendingOrder;