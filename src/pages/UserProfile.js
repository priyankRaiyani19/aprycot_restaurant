import React from 'react';
import {onlineOrderData} from "../data/userProfile/onlineOrderData"
import v1 from "../assets/common/Vector 3.png";
import v2 from "../assets/common/Vector 4.png";
import ProfileBanner from "../components/core/UserProfile/profileBanner";
import News from "../components/core/UserProfile/news";
import OnlineOrder from "../components/core/UserProfile/onlineOrder";
import {TypeOfOrder} from "../data/userProfile/typesOfOrder";

const UserProfile = ({isSidebarHovered}) => {




    return (
        <div className={` z-50  flex flex-col   mt-[80px] 
        text-3xl  text-black mx-auto my-auto bg-[#FFF6D8]  transition-all duration-500
         ${isSidebarHovered ? "w-[90vw] ml-[-50px]   " : "w-[100vw]"} `}>
            <div
                className={`fixed  flex flex-col mt-[250px] ${isSidebarHovered ? "w-[1380px] ml-[50px]" : "w-full "}`}>
                <div className={`mb-[-120px]`}>
                    <img src={v1} alt=""/>
                </div>
                <div>
                    <img src={v2} alt=""/>
                </div>
            </div>

            <div>
                <ProfileBanner isSidebarHovered={isSidebarHovered}   />
            </div>



            <div className={`  z-50 p-5   
            ${isSidebarHovered ? "w-[83.5vw] ml-[50px]" : "w-[91vw]" }
            grid grid-cols-12 gap-[16px]
            
            `}>

                <div className={`col-span-3  flex flex-col gap-[40px]`}>
                        <News />
                    <OnlineOrder data={onlineOrderData} isActive={true} />
                    <OnlineOrder data={TypeOfOrder} isActive={false} />

                </div>

                <div className={`col-span-6 bg-white h-full  `}>
4
                </div>

                <div className={`col-span-3 bg-white h-full  `}>
4
                </div>


            </div>








        </div>
    );
};

export default UserProfile;