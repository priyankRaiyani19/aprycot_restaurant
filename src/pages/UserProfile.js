import React from 'react';
import {onlineOrderData} from "../data/userProfile/onlineOrderData"
import v1 from "../assets/common/Vector 3.png";
import v2 from "../assets/common/Vector 4.png";
import ProfileBanner from "../components/core/UserProfile/profileBanner";
import News from "../components/core/UserProfile/news";
import OnlineOrder from "../components/core/UserProfile/onlineOrder";
import {TypeOfOrder} from "../data/userProfile/typesOfOrder";
import Suggetions from "../components/core/UserProfile/suggetions";
import SpacialMenu from "../components/core/UserProfile/spacialMenu";

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
                <ProfileBanner isSidebarHovered={isSidebarHovered}/>
            </div>


            <div className={`  z-50 p-5   
            ${isSidebarHovered ? "w-[83.5vw] ml-[50px]" : "w-[91vw]"}
            grid grid-cols-12 gap-[16px]
            
            `}>


                {/*grid 1 */}

                <div className={`col-span-3  flex flex-col gap-[40px]`}>
                    <News isSidebarHovered={isSidebarHovered}/>
                    <OnlineOrder data={onlineOrderData} isActive={true}/>
                    <OnlineOrder data={TypeOfOrder} isActive={false}/>

                </div>

                {/*grid 2 */}

                <div className={`col-span-6 bg-white h-full  `}>
                    4
                </div>

                {/*grid 3 */}

                <div className={`col-span-3  h-full flex flex-col gap-[40px] `}>

                    <div className={`  bg-white p-5 rounded-[24px] py-[10px] `}>

                        <h1 className={`font-bold text-[23px]`}>
                            About
                        </h1>

                        <hr className={`mb-5 mt-5`}/>

                        <p className={`text-[16px] text-gray-500`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, saepe?
                            <span className={`font-bold text-black`}>
                               {" "}
                                Lorem ipsum dolor sit amet.
                            </span>
                        </p>

                        <div className={`text-gray-500`}>
                            <div className={`flex items-center text-[16px] gap-2 `}>
                                <p>Email : </p>
                                <p className={`text-[#EA6A12]`}>

                                    nikjone@demoo.com
                                </p>
                            </div>
                            <div className={`flex items-center text-[16px] gap-2 `}>
                                <p>Phone :</p>
                                <p className={`text-[#EA6A12]`}>
                                    9173368811
                                </p>
                            </div>
                            <div className={`flex items-center text-[16px] gap-2 `}>
                                <p>Location :</p>
                                <p className={`text-[#EA6A12]`}>
                                    USA
                                </p>
                            </div>

                        </div>


                    </div>


                    <div>
                    <Suggetions/>
                    </div>

                    <div>

                        <SpacialMenu/>
                    </div>



                </div>


            </div>


        </div>
    );
};

export default UserProfile;