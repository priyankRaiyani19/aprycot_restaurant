import React from 'react';
import squar from "../../../assets/userProfile/squar.png"
import circle from "../../../assets/userProfile/circle.png"
import dots from "../../../assets/userProfile/Group.png"
import crossLine from "../../../assets/userProfile/crossline.png"
import dotedSquar from "../../../assets/userProfile/Rectangle.png"
import lines from "../../../assets/userProfile/lines.png"
import pasta from "../../../assets/userProfile/Pasta.png"
import OrngButton from "../../common/OrngButton";


const SpacialMenu = () => {
    return (
        <div className={`  bg-white  rounded-[2.5rem] w-full p-5 w-full`}>

            <div className={`relative flex flex-col gap-2  items-center justify-center   `}>

                <div className={`z-50 absolute flex flex-col items-center font-bold text-[#EA6A12] 
                text-[1.5rem] -rotate-[15deg] font-PlayfairDisplay -ml-[11.5rem] -mt-[15rem]`}>
                    <p>
                        Today's
                    </p>
                    <p>
                        Spacial
                    </p>
                    <p>
                        Offer
                    </p>
                </div>


                <img src={lines} alt=""
                     className={` absolute -ml-[12rem] mt-[8rem] `}
                />
                <img src={squar} alt=""
                     className={` absolute  mt-[0rem] text-bgcolor2 `}
                />
                <img src={dotedSquar} alt=""
                     className={` absolute -ml-[14rem]  mt-[19rem] h-[2.5rem] `}
                />
                <img src={dotedSquar} alt=""
                     className={` absolute -ml-[12rem]  -mt-[14rem]  `}
                />
                <img src={crossLine} alt=""
                     className={` absolute ml-[12rem]  -mt-[19rem]  `}
                />
                <img src={crossLine} alt=""
                     className={` absolute ml-[14rem]  mt-[5rem]  `}
                />
                <img src={circle} alt=""
                     className={` absolute ml-[14rem]  -mt-[5rem]  `}
                />
                <img src={dots} alt=""
                     className={` absolute ml-[10rem]  -mt-[12.5rem]  `}
                />
                <img src={dots} alt=""
                     className={` absolute -ml-[1rem]  mt-[15rem]  `}
                />
                <div className={`py-2 px-4 text-center border-2 rounded-full  absolute ml-[14rem] mt-[10rem] border-bgcolor`}>
                        50%
                    <p>off</p>

                </div>


                <div className={`z-50 flex flex-col gap-2  text-[2.5rem] mt-[160px] mx-auto my-auto`}>
                    <img src={pasta} alt=""/>
                </div>

                <div className={`mt-8 `}>
                    <OrngButton text={"Order Now!"}/>
                </div>


            </div>

        </div>
    );
};

export default SpacialMenu;