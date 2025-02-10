import bg_first from '../assets/dashBoard/bg_first.jpg'
import burger from '../assets/dashBoard/burger.png'
import OrngButton from "../components/common/OrngButton";
import OfferSection from "../components/core/Dashboard/offerSection";
import {IoIosArrowForward} from "react-icons/io";
import CategoryMenu from "../components/core/Dashboard/categoryMenu";

function DashBoard({isSidebarHovered}) {

    // FFF6D8
    return (
        <div className={`z-50   flex flex-col  w-[100vw]  
        text-3xl  text-black mx-auto my-auto bg-[#FFF6D8]  transition-all duration-500
         ${isSidebarHovered ? "w-[90vw] ml-[-50px] " : "w-[100vw] "} `}>

            {/*first part*/}

            <OfferSection isSidebarHovered={isSidebarHovered}/>




            {/*second part*/}

            <div className={` w-[90vw] flex flex-row  transition-all duration-500 
            mt-[30px] ${isSidebarHovered ? "gap-[20px]" : "gap-[40px]"} z-50`}>
                {/* Left Section */}
                <div className={`relative transition-all duration-500 
            ${isSidebarHovered ? "w-[65%] ml-[50px]" : "w-[75%]"  } h-[390px] p-5  `}>


                    {/*heading*/}
                    <div className={`flex justify-between items-center `}>
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
                    <div>
                        <CategoryMenu isSidebarHovered={isSidebarHovered}/>

                    </div>


                </div>
            </div>

            {/*right part*/}

            <div>

            </div>


        </div>
    )
}

export default DashBoard