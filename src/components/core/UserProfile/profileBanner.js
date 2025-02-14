import React from 'react';
import profileBg from "../../../assets/userProfile/profile_bg.png";
import {HiUserCircle} from "react-icons/hi";
import {IoLocationOutline} from "react-icons/io5";
import {bannerData} from "../../../data/userProfile/bannerData";
// import useToggleSidebar from "../../../hooks/useToggleSidebar";

const ProfileBanner = () => {
    // const {isSidebarHovered} = useToggleSidebar()

    return (
        <div className={`  z-50 p-5`}>
            <div className={`relative rounded-[24px]`}>

                <div>
                    <img src={profileBg} alt="not found "
                         className={`w-[89VW] z-0   rounded-[2.5rem]`}
                    />
                </div>

                <div className={`z-[5] absolute  h-[90px]
                    mt-[-89px] rounded-b-[24px] p-5
                    bg-opacity-50 backdrop-blur-[5px] bg-white flex  justify-between 
                     w-full
                     
                     `}>

                    <div className={`flex  gap-5  `}>
                        <div className={`flex gap-5 mt-[-15px]`}>


                            <div className={`-mt-[3rem]`}>
                                <HiUserCircle className="mt-[0px] text-[#EA6A12] w-[6.5rem] h-[6.5rem] "/>
                            </div>

                            <div className={`flex flex-col`}>
                                <p className={`text-[1.5rem] text-bgcolor font-bold font-PlayfairDisplay`}>
                                    Devon Lane
                                </p>
                                <p className={`text-[16px] flex items-center justify-center`}>
                                    <span className={`text-[22px]`}><IoLocationOutline/></span> Lisbon, Portugal
                                </p>
                            </div>

                            <div className={`flex flex-col mt-[0.3rem] text-[1rem] gap-[0.5rem] leading-[20px] `}>


                                <div> UI/UX Designer</div>

                                <div> Lisbon, Portugal</div>

                                <div> pjraiyani19@gmail.com</div>

                            </div>

                        </div>


                    </div>

                    <div className={`flex items-center gap-3 p-1  `}>

                        {bannerData.map((ele, index) => (
                            <div key={index} className={` flex flex-col items-center justify-center p-[0.5rem] rounded-[8px] bg-bgcolor
                                 h-[65px] w-[65px] text-white`}>
                                <p className={`text-[1rem] font-bold`}>
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