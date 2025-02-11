import React from 'react';
import profileBg from "../../../assets/userProfile/profile_bg.png";
import {HiUserCircle} from "react-icons/hi";
import {IoLocationOutline} from "react-icons/io5";
import {bannerData} from "../../../data/userProfile/bannerData";

const ProfileBanner = ({isSidebarHovered}) => {
    return (
        <div className={`  z-50 p-5   
            ${isSidebarHovered ? "w-[83.5vw] ml-[50px]" : "w-full"}
            `}>
            <div className={`relative rounded-[24px]`}>
                <div>
                    <img src={profileBg} alt="not found "
                         className={`w-[89VW] z-0  h-[400px] rounded-[24px]`}
                    />
                </div>


                <div className={`z-[5] absolute  h-[90px]
                    mt-[-89px] rounded-b-[24px] p-5
                    bg-opacity-100 backdrop-blur-[5px] bg-white flex  justify-between 
                      ${isSidebarHovered ? "w-[81vw]" : "w-[89vw]"}
                     
                     `}>

                    <div className={`flex  gap-5  `}>
                        <div className={`flex gap-5 mt-[-15px]`}>


                            <div className={`mt-[-40px]`}>
                                <HiUserCircle className="mt-[0px] text-[#EA6A12] w-20 h-20 "/>
                            </div>

                            <div className={`flex flex-col`}>
                                <p className={`text-[23px]`}>
                                    Devon Lane
                                </p>
                                <p className={`text-[16px] flex items-center justify-center`}>
                                    <span className={`text-[22px]`}><IoLocationOutline/></span> Lisbon, Portugal
                                </p>
                            </div>

                            <div className={`flex flex-col text-[16px]  leading-[25px] `}>


                                <div> UI/UX Designer</div>

                                <div> Lisbon, Portugal</div>

                                <div> pjraiyani19@gmail.com</div>

                            </div>

                        </div>


                    </div>

                    <div className={`flex items-center gap-3 p-1  `}>

                        {bannerData.map((ele, index) => (
                            <div key={index} className={` flex flex-col items-center justify-center p-[8px] rounded-[8px] bg-[#EA6A12]
                                 h-[65px] w-[65px]`}>
                                <p className={`text-[16px]`}>
                                    {ele.count}
                                </p>
                                <p className={`text-[13px]`}>
                                    {ele.title}
                                </p>
                            </div>
                        ))

                        }
                    </div>


                </div>


            </div>


        </div>
    );
};

export default ProfileBanner;