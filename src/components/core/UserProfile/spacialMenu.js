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
        <div className={` h-[395px] bg-white p-5 rounded-[24px]  `}>

            <div className={`relative flex flex-col gap-2 mt-[10px] `}>

                <div className={`z-50 absolute flex flex-col font-bold text-[#EA6A12] items-center justify-center text-[23px] -rotate-[15deg] `}>


                      <p>
                          Today's
                      </p>
                      <p>
                          Spacial </p>
                      <p>
                          Offer
                      </p>

                </div>

                <div className={  `z-50 flex flex-col gap-2  text-[23px] mt-[160px] mx-auto my-auto`}>
                    <img src={pasta} alt=""/>
                </div>


                <img src={circle} alt="" className={`absolute mt-[100px] ml-[210px] h-[62px] w-[63.5px]`}/>
                <img src={squar} alt="" className={`absolute mt-[125px] ml-[120px] `}/>
                <img src={dots} alt="" className={`absolute mt-[30px] ml-[140px]`}/>
                <img src={dots} alt="" className={`absolute mt-[250px] ml-[80px]`}/>
                <img src={dotedSquar} alt="" className={`absolute mt-[15px]`}  />
                <img src={dotedSquar} alt="" className={`absolute mt-[280px] h-[50px] w-[50px] `}  />
                <img src={lines} alt=""  className={`absolute mt-[180px] ml-[40px]  `} />
                <img src={crossLine} alt="" className={`absolute mt-[0px] ml-[140px]  `}/>
                <img src={crossLine} alt="" className={`absolute mt-[180px] ml-[210px] h-[15px] w-[70px]  `}/>

                    <div className={`mt-8 ml-[75px]`}>
                        <OrngButton text={"Order Now"}/>
                    </div>
                <div className={ `absolute  ml-[205px] mt-[230px]  w-[74px] h-[74px] text-[14px] font-bold rounded-full border-2 text-center p-0.5`}>
                   <p> 50% </p> <p> off </p>
                </div>


            </div>

        </div>
    );
};

export default SpacialMenu;