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
import Review from "../components/core/UserProfile/review";


const UserProfile = () => {


    return (
        <div className={` z-50  flex flex-col  
            bg-mainbg w-full  
       `}>
            <div
                className={`fixed  flex flex-col mt-[250px] w-full `}>
                <div className={`mb-[-120px]`}>
                    <img src={v1} alt=""/>
                </div>
                <div>
                    <img src={v2} alt=""/>
                </div>
            </div>


            <ProfileBanner/>


            <div className={`  z-50  
                p-8
            grid grid-cols-12 gap-[16px]
            
            `}>

                {/*grid 1 */}

                <div className={`col-span-3  flex flex-col gap-[40px]`}>
                    <News />
                    <OnlineOrder data={onlineOrderData} isActive={true}/>
                    <OnlineOrder data={TypeOfOrder} isActive={false}/>

                </div>

                {/*grid 2 */}

                <div className={`col-span-6  h-full  flex flex-col gap-[40px]  `}>
                    <Review isActive={true}/>
                    <Review isActive={false}/>
                </div>

                {/*grid 3 */}

                <div className={`col-span-3  h-full flex flex-col gap-[40px] `}>

                    <div className={`  bg-white p-5 rounded-[24px] py-[10px] `}>

                        <h1 className={`font-semibold text-[1.5rem] font-PlayfairDisplay`}>
                            About
                        </h1>

                        <hr className={`mb-5 mt-5`}/>

                        <p className={`text-[1rem] text-grayfont `}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, saepe?
                            <span className={`font-semibold text-black`}>
                               {" "}
                                Lorem ipsum dolor sit amet.
                            </span>
                        </p>

                        <div className={`text-grayfont flex  flex-col gap-[0.5rem] mt-[1rem] `}>
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


                    <Suggetions/>


                    <SpacialMenu/>


                </div>

            </div>

        </div>
    );
};

export default UserProfile;