import React from "react";
import bg_first from "../../../assets/dashBoard/bg_first.jpg";
import OrngButton from "../../common/OrngButton";
import burger from "../../../assets/dashBoard/burger.png";

const OfferSection = ({isSidebarHovered}) => {
    return (
        <div className={` w-[90vw] flex flex-row  transition-all duration-500 mt-[30px] ml-[30px] 
          ${isSidebarHovered ? "gap-[20px]" : "gap-[40px]"  } rounded-[24px] z-50 `}>
            {/* Left Section */}
            <div className={`relative transition-all duration-500 
             ${isSidebarHovered ? "w-[65%] ml-[50px]" : "w-[75%]"  } h-[390px] rounded-[24px] `}>
                <img
                    src={bg_first}
                    alt=""
                    className="absolute bg-cover w-[1100px] h-[390px] rounded-[24px]"
                />
                <div className="absolute w-[75%] h-full flex
                bg-gradient-to-r from-white to-transparent rounded-[24px]">
                    <div className="ml-[82px] flex flex-col justify-center gap-10">
                        <p className="text-[13px] text-[#EA6A12]">👑 Deal of the weekend</p>
                        <h1 className="text-[40px] font-bold">Hello, Austine Robertson</h1>
                        <p className="text-[16px]">
                            Get <span className="text-[#EA6A12]">FREE delivery</span> on every weekend.
                        </p>
                        <OrngButton text="Check Menu" />
                    </div>
                </div>
            </div>
            {/* Right Section */}
            <div className={`flex flex-col rounded-md items-center   ${isSidebarHovered ? " mr-[100px] w-[]" : "mr-[20px]"}`}>
                <div className="w-full h-[275px] mt-[50px] bg-gray-100 rounded-t-[24px]">
                    <img
                        src={burger}
                        alt=""
                        className="mt-[-100px] w-[399px] h-[295px]"
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-2
                 w-full h-full bg-gray-100 rounded-b-[24px]">
                    <p className="text-3xl font-bold">50% off</p>
                    <p className="text-lg text-gray-500">the full price of burger</p>
                </div>
            </div>
        </div>
    );
};

export default OfferSection;
