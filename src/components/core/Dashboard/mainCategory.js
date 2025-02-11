import React from 'react';
import {mainCategory} from "../../../data/dashboard/mainCategory";
import {IoIosAddCircle, IoIosArrowForward} from "react-icons/io";
import {FaRegStar, FaStar} from "react-icons/fa";
import TypesOfCategoryMenu from "./typesOfCategoryMenu";
import {myCart} from "../../../data/dashboard/myCart";
import {RiDeleteBin5Fill} from "react-icons/ri";
import OrngButton from "../../common/OrngButton";

const MainCategory = ({isSidebarHovered}) => {
    return (
        <div className={` w-[90vw] flex flex-row  justify-center  transition-all duration-500 
            mt-[30px] ${isSidebarHovered ? "gap-[80px]" : "gap-[80px]"} z-50 p-[24px] `}>


            {/* Left Section */}

            <div className={`relative gap-[48px] transition-all duration-500 
                ${isSidebarHovered ? "w-[65%] ml-[50px]" : "w-[75%]"} 
                h-[390px] p-[24px]  `}>

                {/*heading*/}
                <div className={`flex justify-between items-center text-center p-5`}>
                    <p className={`text-[40px] text-[#07143B] font-bold `}>
                        Menu Category
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

                {/*category part*/}
                <div className={`h-[236px] w-[1,028px] mt-[48px]
                        ${isSidebarHovered ? "w-[1000px]" : "w-[1,028px]"}`}>
                    <TypesOfCategoryMenu isSidebarHovered={isSidebarHovered}/>
                </div>

                <div className={`h-[236px] mt-[48px]
                        ${isSidebarHovered ? "w-[80px]" : "w-[1,028px]"}`}
                >

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


                </div>


            </div>


            {/* right part */}

            <div className={`flex flex-col rounded-[24px] items-center h-[772px] z-50 bg-white
                   ${isSidebarHovered ? " mr-[100px] w-[1000px]" : " w-[581px]"} gap-[43px] p-[15px] `}>

                {/* heading */}
                <div
                    className="w-full h-[30px] mt-[50px]  bg-[rgba(255, 255, 255, 0.4)] text-[23px] rounded-t-[24px] pl-[24px] ">
                    My cart
                </div>

                <div className={`h-[2px] bg-gray-100   ${isSidebarHovered ? " w-[310px]" : " w-[310px] "} 
                    `}></div>

                <div
                    className={` relative flex flex-col gap-[24px] ${isSidebarHovered ? " w-[310px]" : " w-[310px] "} h-[608px] `}>

                    {myCart.map((ele) => (<div
                            className={`flex items-center mt-auto rounded-full justify-between px-4 hover:bg-[#FFF5EE] `}>
                            <div className={`relative flex items-center justify-center `}>
                                <div
                                    className={`py-1 rounded-full absolute ${ele.name === "Mushroom Pizza" ? "ml-[-150px]" : "ml-[-120px]"}
                                          rounded-full text-center`} key={ele.id}>
                                    <img src={ele.img} alt=""
                                         className={`h-[76px] w-[76px]  rounded-full shadow-[rgba(234,106,18,100)_15px_2px_10px_-10px] `}/>
                                </div>
                                <div className={`ml-[80px]`}>
                                    <p className={`text-[16px]`}>
                                        {ele.name}
                                    </p>
                                    <p className={`text-[16px]`}>
                                        <span className={`text-[#EA6A12]`}>x</span>1
                                    </p>
                                </div>
                            </div>


                            <div className={`flex flex-col items-center justify-center gap-2`}>
                                <div className={`h-[20px] w-[18px]`}>
                                    <RiDeleteBin5Fill className={`h-[20px] text-[#EA6A12] w-[18px]`}/>
                                </div>
                                <div className={`text-[13px]`}>
                                    $7.49
                                </div>
                            </div>
                        </div>


                    ))}

                    <div className={`mx-auto`}>
                        <OrngButton text={"CheckOut"}/>
                    </div>
                </div>


            </div>


        </div>

    );
};

export default MainCategory;