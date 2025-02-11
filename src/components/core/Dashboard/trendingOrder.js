import React, {useState} from 'react';
import {trendingOrderLinks} from "../../../data/dashboard/trendingOrderLinks";
import {smallCategories} from "../../../data/dashboard/smallCategories";
import {IoIosAddCircle, IoIosArrowForward} from "react-icons/io";

const TrendingOrder = ({isSidebarHovered}) => {

    const [selectedCategory, setSelectedCategory] = useState("Burgers");

    return (
        <div className={` w-[90vw] flex flex-row  justify-center  transition-all duration-500 mb-[50px]
            mt-[30px] ${isSidebarHovered ? "gap-[80px]" : "gap-[80px]"} z-50 p-[24px]  h-[774px]`}>


            {/* Left Section */}

            <div className={`relative flex flex-col justify-center gap-[48px] transition-all duration-500 
                ${isSidebarHovered ? "w-[65%] ml-[50px]" : "w-[75%]"} 
                h-[390px]   `}>

                {/*heading*/}
                <div className={`flex justify-between items-center text-center p-5`}>
                    <p className={`text-[40px] text-[#07143B] font-bold `}>
                        Trending Orders
                    </p>
                    <div className={`flex justify-center items-center gap-[8px]`}>
                        <p className={`text-[#07143B] text-[16px] `}>
                            View All
                        </p>
                        <p className={` h-[24px] w-[24px] p-[6px] text-[12px]  content-center 
                            text-white bg-[#EA6A12] rounded-full`}>
                            <IoIosArrowForward/>
                        </p>
                    </div>
                </div>

                <div className={`w-[900px] flex `}>


                    <div className={`
                    ${isSidebarHovered ? "w-[800px] h-[237px]  " : " w-[1099px] h-[237px]"}
                    grid grid-cols-3 items-center gap-[80px] relative`}>
                        {trendingOrderLinks.map((ele) => (

                            <div key={ele.id}
                                 className={`flex gap-[8px] hover:text-white hover:bg-[#EA6A12] bg-white rounded-[24px]  p-[20px] `}>

                                <div className={`flex flex-col gap-[1px] hover:text-white`}>

                                    <p className={`text-[13px]`}>
                                        👑 Top of the week
                                    </p>
                                    <p className={`text-[16px] font-bold`}>
                                        Italian Salad
                                    </p>

                                    <p className={`text-[13px]  text-gray-500`}>
                                        {ele.cal} calories
                                    </p>


                                    <hr className={`w-[32px] `}/>

                                    <p className={`text-[13px] text-gray-500`}>
                                        {ele.number} persons
                                    </p>
                                    <div className={`flex items-center gap-[28px] `}>
                                        < p className={`text-[16px]`}>$7.49</p>

                                        <IoIosAddCircle className={`h-[24px] w-[24px]  hover:text-white  `}/>

                                        </div>
                                </div>
                                <div className={`absolute mt-[25px] items-center ml-[150px] w-[198px] h-[148px]`}
                                     key={ele.id}>
                                    <img src={ele.img} alt="" className={`
                                    ${ele.id > '3' ? "w-[298px] h-[198px] ml-[-5vh]" : "w-[148px] h-[148px]"}
                                     ${ele.id > '3' && isSidebarHovered ? "ml-[-10vh]  " : " ml-[0px] "}
                                     ${ele.id <= '3' && isSidebarHovered ? "ml-[-5vh]  " : " ml-[0px] "}
                                   `}/>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>

            {/*right section*/}

            <div className={`p-4  bg-opacity-50 backdrop-blur-[5px] bg-white shadow-lg rounded-2xl  max-w-md 
              ${isSidebarHovered ? "w-[25%] mr-[50px]" : "w-[30%] mr-[-40px]"}`}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-[23px] font-semibold">Categories</h2>
                    <div>
                        <button className="text-black text-[16px] hover:underline text-sm">
                            View All
                        </button>
                    </div>
                </div>
                <hr className={`p-3`}/>
                <div className="flex z-50 flex-wrap gap-x-[10px] gap-y-[24px] ">
                    {smallCategories.map((ele, index) => (<button
                        key={index}
                        onClick={() => setSelectedCategory(ele)}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${selectedCategory === ele ? "bg-orange-500 text-white" : "border border-orange-500 text-orange-500 hover:bg-[#EA6A12] hover:text-white"}`}
                    >
                        {ele.name}
                    </button>))}
                </div>
            </div>

        </div>
    );
};

export default TrendingOrder;