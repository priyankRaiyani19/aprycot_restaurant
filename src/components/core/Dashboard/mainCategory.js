import React from 'react';
import {IoIosAddCircle, IoIosArrowDroprightCircle} from "react-icons/io";
import {myCart} from "../../../data/dashboard/myCart";
import {FaRegStar, FaStar, FaTrash} from "react-icons/fa";
import {mainCategory} from "../../../data/dashboard/mainCategory";
import TypesOfCategoryMenu from "./typesOfCategoryMenu";
import OrngButton from "../../common/OrngButton";


const MainCategory = () => {
    return (<div className={` flex gap-[3rem]  p-5`}>

            <div className={` px-8 w-[70%]`}>

                <div className={`relative flex justify-between   `}>
                    <p className={`font-PlayfairDisplay text-[2.5rem] font-bold`}>Menu category</p>

                    <div className={`flex items-center justify-center gap-2`}>
                        <p>
                            View All
                        </p>
                        <p className={`text-[1.5rem] text-bgcolor`}>
                            <IoIosArrowDroprightCircle/>

                        </p>
                    </div>
                </div>


                <TypesOfCategoryMenu/>


                <div className={``}>

                    <div
                        className={`  flex  items-center justify-center  mt-[6rem]  gap-5  `}>
                        {
                            mainCategory.map((ele) => (

                                    <div
                                        className={` relative  hover:bg-bgcolor2 bg-white hover:text-white text-black
                                     flex flex-col items-center justify-center gap-5 rounded-[1.5rem] w-full p-5 group `}
                                        key={ele.id}>

                                        <div className={` flex items-center justify-center absolute w-[10.625rem] h-[10.625rem]
                                     rounded-full mt-[-13.625rem] mx-auto `}>
                                            <img src={ele.img} alt=""
                                                 className={` rounded-full 
                                 ${ele.id === '3' ? "h-[180px] w-[180px] mt-[-1rem]" : "h-[140px] w-[140px]"}.
                                 `}
                                            />
                                        </div>

                                        <div className={`flex flex-col mt-[80px] gap-[0.5rem] items-start w-full`}>
                                            <p className={`text-[1rem] font-bold `}>
                                                {ele.name}
                                            </p>
                                            <p className={`flex text-[20px] group-hover:text-white text-[#EA6A12]`}>
                                                <FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/>
                                            </p>
                                        </div>

                                        <div className={`flex w-full justify-between text-bgcolor group-hover:text-white `}>
                                            <p className={`text-[16px]   `}>
                                                $ <span className={`font-bold`}>7.29 </span>
                                            </p>
                                            <p className={`text-[1.5rem] `}>
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
            <div className={` flex flex-col p-10 
                bg-white rounded-[1.5rem] gap-[1rem] w-[30%] `}>


                <p className={`font-PlayfairDisplay text-[1.5rem] font-semibold`}>My Cart</p>
                <div className={`h-[1px] bg-bordercolor `}></div>


                <div className={`flex flex-col items-center gap-[4rem] p-1  w-full `}>
                    {
                        myCart.map((ele) => (
                            <div
                                key={ele.id}
                                className={`flex items-center mt-auto rounded-full justify-between px-3 py-1 
                                bg-cartBg  hover:bg-bgcolor2 hover:text-white w-full group`}>

                                <div className={`flex justify-center items-center relative py-2 px-5 `}>
                                    <img src={ele.img} alt=""
                                         className={`w-[6.25rem] h-[6.25rem] absolute
                ${ele.id === '1' ? "-ml-[12rem] " : "-ml-[11rem] "}/
                ${ele.id === '2' ? "-ml-[10rem] " : "-ml-[11rem] "} `}/>
                                    <div className={`ml-[3.5rem] `}>
                                        <p className={`font-bold`}>{ele.name}</p>
                                        <p>
                                           <span className={`text-bgcolor`}> x </span>
                                             1
                                        </p>
                                    </div>
                                </div>

                                <div className={`flex flex-col justify-center items-end pr-[1rem] gap-[0.4rem]   `}>
                                    <FaTrash className={`text-bgcolor group-hover:text-white `}/>
                                    <p className={`text-[1rem]`}>
                                        <span className={`text-[0.813rem]`}>$</span> 7.49
                                    </p>
                                </div>


                            </div>


                        ))
                    }
                </div>


                <div className={`flex items-center justify-center`}>
                    <OrngButton text={"Checkout"}/>
                </div>

            </div>


        </div>

    );
};

export default MainCategory;