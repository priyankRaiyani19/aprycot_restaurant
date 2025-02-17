import React from "react";
// import useToggleSidebar from "../../../hooks/useToggleSidebar";
import bgImage from "../../../assets/dashBoard/bg_first.jpg";
import burger from "../../../assets/dashBoard/burger.png"
import OrngButton from "../../common/OrngButton";

const OfferSection = () => {
    // const {isSidebarHovered} = useToggleSidebar
        return (<div className={` flex gap-[2.5rem] p-8 `}>


        {/*left part*/}
        <div className={`relative flex  `}>



                <img src={bgImage} alt=""
                     className={`rounded-[1.5rem] `}
                />

            <div className={` absolute z-10 flex flex-col p-14 gap-[1.5rem]`}>
                <div className={`text-bgcolor`}>
                    👑 Deal of the weekend
                </div>

                <div className={`text-[2.5rem] font-PlayfairDisplay font-bold`}>
                    Hello, Austine Robertson
                </div>
                <div className={`text-grayfont font-semibold`}>
                    Get <span className={`text-bgcolor`}> FREE delivery </span> on every weekend.
                </div>

                <OrngButton text={"Check Menu"}/>

            </div>


        </div>

        {/*right part*/}
        <div className={` flex items-center justify-center w-[27.313rem] h-[16.3rem] 
            bg-white rounded-[1.5rem] mt-[4.10rem] `}>

            <img src={burger} alt="not found"
                 className={`absolute h-[17.938rem] w-[20.438rem]  -mt-[12.5rem] `}
            />

            <div className={`flex flex-col items-center justify-center mt-[8rem] gap-[0.5rem]`}>
                <h1 className={`text-[2.5rem] font-semibold font-PlayfairDisplay`}>
                    50% off
                </h1>
                <div className={`text-grayfont font-semibold`}>
                    The full price of burgers
                </div>

            </div>

        </div>


    </div>);
};

export default OfferSection;
