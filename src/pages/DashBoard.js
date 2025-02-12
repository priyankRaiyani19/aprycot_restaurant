import OfferSection from "../components/core/Dashboard/offerSection";
import React, {useState} from "react";
import MainCategory from "../components/core/Dashboard/mainCategory";
import Burger from "../assets/dashBoard/Burger_BG.png";
import v1 from "../assets/common/Vector 3.png";
import v2 from "../assets/common/Vector 4.png";
import TrendingOrder from "../components/core/Dashboard/trendingOrder";

function DashBoard({isSidebarHovered}) {



return(  // FFF6D8
    <div className={` z-50  flex flex-col   mt-[80px] 
        text-3xl  text-black mx-auto my-auto bg-[#FFF6D8]  transition-all duration-500
         ${isSidebarHovered ? "w-[90vw] ml-[-50px]   " : "w-[100vw]"} `}>


        <div className={`fixed  flex flex-col mt-[250px] gap-[-500px] ${isSidebarHovered ?"w-[1380px] ml-[50px]" :"w-full "}`}>
           <div className={`mb-[-120px]`}>
               <img src={v1} alt=""/>
           </div>
          <div>
              <img src={v2} alt=""/>
          </div>
        </div>


        {/*first part*/}

        <OfferSection isSidebarHovered={isSidebarHovered}/>


        {/*second part*/}

        <div>
            <MainCategory isSidebarHovered={isSidebarHovered}/>
        </div>


        {/*third part*/}

    <div className={`z-50`}>
        <TrendingOrder isSidebarHovered={isSidebarHovered}/>
    </div>

        <div className={`absolute z-[5]
          ${isSidebarHovered ? "mt-[255vh] ml-[1150px]  w-full" : "mt-[255vh] ml-[1200px] w-full"}`}>
            <img src={Burger} alt=""
                 className={` sticky `}
            />
        </div>
    </div>)
}

export default DashBoard