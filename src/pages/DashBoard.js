import OfferSection from "../components/core/Dashboard/offerSection";
import React from "react";
import MainCategory from "../components/core/Dashboard/mainCategory";
import Burger from "../assets/dashBoard/Burger_BG.png";
import v1 from "../assets/common/Vector 3.png";
import v2 from "../assets/common/Vector 4.png";
import TrendingOrder from "../components/core/Dashboard/trendingOrder";
import useToggleSidebar from "../hooks/useToggleSidebar";

function DashBoard() {

const {isSidebarHovered} = useToggleSidebar;

return(  // FFF6D8
    <div className={`   flex   flex-col  w-full  
        text-3xl  text-black mx-auto my-auto bg-[#FFF6D8]  transition-all duration-500
       `}>


        <div className={`fixed flex flex-col mt-[250px] gap-[-500px] `}>
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

    <div >
        <TrendingOrder isSidebarHovered={isSidebarHovered}/>
    </div>

        <div className={`absolute z-[5]
          `}>
            <img src={Burger} alt=""
                 className={` sticky `}
            />
        </div>
    </div>)
}

export default DashBoard