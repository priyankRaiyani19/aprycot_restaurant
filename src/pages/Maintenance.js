import React from 'react';
import v1 from "../assets/common/Vector 3.png"
import v2 from "../assets/common/Vector 4.png"
import OrngButton from "../components/common/OrngButton";
import Timer from "../components/common/Timer";
import img1 from "../assets/Auth/SignIn/Frame 37293.png"
import img2 from "../assets/Auth/SignIn/Frame 37294.png"
import img3 from "../assets/Auth/SignIn/Frame 37295.png"
import img4 from "../assets/Auth/SignIn/Frame 37296.png"
import img5 from "../assets/Auth/SignIn/Frame 37298.png"
import img6 from "../assets/Auth/SignIn/Frame 37299.png"
import {Link} from "react-router";



const Maintenance = () => {
    return (
        <div className={`bg-mainbg h-[100vh] w-full overflow-x-hidden`}>
            <div className={`fixed flex flex-col mt-[150px] z-[5] w-full  `}>
                <div className={`mb-[-120px] w-full`}>
                    <img src={v1} alt=""/>
                </div>
                <div>
                    <img src={v2} alt=""/>
                </div>
            </div>

            <div className={`flex h-[60vh] gap-[9rem]  `}>

                <img src={img1} alt="" className={`w-[10rem] h-[10rem] -mt-[3rem]`}/>
                <img src={img2} alt="" className={`w-[10rem] h-[10rem]  mt-[10rem] `}/>
                <img src={img3} alt="" className={`w-[10rem] h-[10rem] mt-[18rem]`}/>
                <img src={img4} alt="" className={`w-[10rem] h-[10rem]  mt-[7rem]`}/>
                <img src={img5} alt="" className={`w-[10rem] h-[10rem] ml-[5rem] mt-[2rem]`}/>
                <img src={img6} alt="" className={`w-[10rem] h-[10rem] mt-[18rem] -ml-[10rem]`}/>




            </div>




                <div className={`flex flex-col justify-center items-center w-full gap-[1rem]`}>
                   <p className={`text-[2.5rem] font-PlayfairDisplay font-semibold`}>
                       Hang on! We are under maintenance
                   </p>

                    <p className={`text-[1rem]`}>
                        It will not take a long time till we get the error fiked. We wii live again in
                    </p>

                    <div>

                        <Timer/>
                    </div>


                    <div className={`w-[30.625rem] h-[2.5rem] flex gap-[0.5rem] bg-transparent`}>
                        <input type="email" className={`px-5 w-[90%] bg-transparent rounded-full border-2`}  placeholder="Enter your email address" />

                        <div className={`w-[20%]`}>
                           <Link to={"/signin"}>
                               <OrngButton text={"Notify Me"}/>
                           </Link>
                        </div>




                </div>
            </div>


        </div>
    );
};

export default Maintenance;