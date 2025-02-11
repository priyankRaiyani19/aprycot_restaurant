import OfferSection from "../components/core/Dashboard/offerSection";
import {IoIosArrowForward} from "react-icons/io";
import TypesOfCategoryMenu from "../components/core/Dashboard/typesOfCategoryMenu";
import {myCart} from "../data/myCart";
import React, {useState} from "react";
import {RiDeleteBin5Fill} from "react-icons/ri";
import MainCategory from "../components/core/Dashboard/mainCategory";
import {smallCategories} from "../data/smallCategories";
import OrngButton from "../components/common/OrngButton";
import {trendingOrderLinks} from "../data/trendingOrderLinks";
import {MdAddCircleOutline} from "react-icons/md";
import Burger from "../assets/dashBoard/Burger_BG.png";

function DashBoard({isSidebarHovered}) {

    const [selectedCategory, setSelectedCategory] = useState("Burgers");

    // FFF6D8
    return (<div className={`   flex flex-col  
        text-3xl  text-black mx-auto my-auto bg-[#FFF6D8]  transition-all duration-500
         ${isSidebarHovered ? "w-[90vw] ml-[-50px] " : "w-[100vw]  "} `}>

        {/*first part*/}

        <OfferSection isSidebarHovered={isSidebarHovered}/>


        {/*second part*/}

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

                    <MainCategory isSidebarHovered={isSidebarHovered}/>


                </div>


            </div>


            {/* right part */}

            <div className={`flex flex-col rounded-[24px] items-center h-[772px]  bg-white
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


        {/*third part*/}

        <div className={` w-[90vw] flex flex-row  justify-center  transition-all duration-500 
            mt-[30px] ${isSidebarHovered ? "gap-[80px]" : "gap-[80px]"} z-50 p-[24px]  h-[774px]`}>


            {/* Left Section */}

            <div className={`relative flex flex-col justify-center gap-[48px] transition-all duration-500 
                ${isSidebarHovered ? "w-[65%] ml-[50px]" : "w-[75%]"} 
                h-[390px] p-[24px]  `}>

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
                                    <div className={`flex items-center gap-[28px]`}>
                                        < p className={`text-[16px]`}>$7.49</p>
                                        <MdAddCircleOutline className={`h-[24px] w-[24px]`}/>
                                    </div>
                                </div>
                                <div className={`absolute mt-[25px] items-center ml-[150px] w-[198px] h-[148px]`}
                                     key={ele.id}>
                                    <img src={ele.img} alt="" className={`
                                    ${ele.id > '3' ? "w-[298px] h-[198px] ml-[-55px]" : "w-[148px] h-[148px]"}
                                    // ${isSidebarHovered ? "ml-[-20px]  " : " ml-[0px] "}
                                   `}/>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>

            {/*right section*/}

            <div className={`p-4  bg-opacity-50 backdrop-blur-[2px] bg-white shadow-lg rounded-2xl  max-w-md 
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

        <div className={`absolute z-[5]
          ${isSidebarHovered ? "mt-[255vh] ml-[1150px] " : "mt-[250vh] ml-[1200px] "}`}>
            <img src={Burger} alt=""
                 className={` sticky`}
            />
        </div>
    </div>)
}

export default DashBoard