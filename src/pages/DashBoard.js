import React from "react";
import v1 from "../assets/common/Vector 3.png"
import v2 from "../assets/common/Vector 4.png"
import OfferSection from "../components/core/Dashboard/offerSection";
import MainCategory from "../components/core/Dashboard/mainCategory";
import TrendingOrder from "../components/core/Dashboard/trendingOrder";
// import HalfBurger from "../assets/dashBoard/Burger_BG.png"


function DashBoard() {


    return (
        <div className={`z-50 flex flex-col bg-mainbg  `}>


            <div className={`fixed flex flex-col mt-[250px] -z-[5] w-full  `}>
                <div className={`mb-[-120px] w-full`}>
                    <img src={v1} alt=""/>
                </div>
                <div>
                    <img src={v2} alt=""/>
                </div>
            </div>


            <OfferSection/>

            <MainCategory/>

            <TrendingOrder/>





        </div>


    )

}

export default DashBoard;