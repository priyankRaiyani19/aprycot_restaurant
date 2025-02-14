import React from 'react';
import v1 from "../../../assets/common/Vector 3.png";
import v2 from "../../../assets/common/Vector 4.png";
import circle from "../../../assets/Auth/Ellipse 188.png";
import logo from "../../../assets/sidebar/full_logo.png";
import img1 from "../../../assets/Auth/SignIn/Frame 37293.png";
import img2 from "../../../assets/Auth/SignIn/Frame 37294.png";
import img3 from "../../../assets/Auth/SignIn/Frame 37295.png";
import img4 from "../../../assets/Auth/SignIn/Frame 37296.png";
import img5 from "../../../assets/Auth/SignIn/Frame 37298.png";
import img6 from "../../../assets/Auth/SignIn/Frame 37299.png";
import OrngButton from "../OrngButton";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";
import {Link} from "react-router";









const SuccessPage = ({isActive}) => {
    return (
        <div className=" flex flex-col  bg-mainbg  h-[100vh]">
            <div className={`fixed -z-1 flex flex-col mt-[8rem]  z-[5] w-full  `}>
                <div className={`mb-[-120px] w-full`}>
                    <img src={v1} alt=""/>
                </div>
                <div>
                    <img src={v2} alt=""/>
                </div>
            </div>


            <div className={` ml-[40rem] z-10 `}>

                <img src={circle} alt="" className={`h-[40rem] w-[80rem] `}/>

            </div>

            <div className={`ml-[5rem] -mt-[28rem] z-10 `}>
                <img src={logo} alt=""/>
            </div>

            <div className={`absolute w-full z-[60] flex`}>

                <img src={img1} alt="" className={`absolute w-[10rem] h-[10rem] ml-[45rem] mt-[3rem]`}  />
                <img src={img2} alt=""   className={`absolute w-[10rem] h-[10rem] ml-[65rem] mt-[12rem]`}  />
                <img src={img3} alt=""  className={`absolute w-[10rem] h-[10rem] ml-[83rem] mt-[12rem]`}  />
                <img src={img4} alt=""  className={`absolute w-[10rem] h-[10rem] ml-[60rem] mt-[26rem]`}  />
                <img src={img5} alt=""  className={`absolute w-[10rem] h-[10rem] ml-[60rem] mt-[1rem]`}  />
                <img src={img6} alt=""  className={`absolute w-[10rem] h-[10rem] ml-[75rem] mt-[2rem]`}  />
                <img src={img1} alt=""  className={`absolute w-[10rem] h-[10rem] ml-[75rem] mt-[25rem]`}  />
                <img src={img3} alt=""  className={`absolute w-[10rem] h-[10rem] ml-[50rem] mt-[12rem]`}  />

            </div>



            <div className={`ml-[12rem] absolute mt-[18rem] z-[1000] flex flex-col items-center justify-center  ${isActive ? "block":"hidden"} `}>


                <p className={`text-[2rem] font-bold font-PlayfairDisplay`}>Reset Password</p>

                <p className={`text-graybg text-center w-[25rem] `}>Enter your email address and we’ll send you an email with instructions to reset your password</p>

                <div className={`flex flex-col mt-[1rem] gap-2 `}>

                    <label htmlFor="email">Email</label>
                    <input type="email" id={"email"}
                           placeholder="Enter your email address"
                    className={`border-2 border-bgcolor  rounded-full pr-[10rem] px-5 py-[0.5rem]`}
                    />
                </div>

                <div className={`flex items-center justify-center  mt-[3rem] `}>
                    <OrngButton text={"Reset"}/>

                </div>




            </div>



       <div className={`ml-[8rem] absolute mt-[15rem] z-[1000] gap-[1rem] flex flex-col items-center justify-center  ${isActive ? "hidden":"block"} `} >


           <IoMdCheckmarkCircleOutline className={`h-[7rem] w-[7rem] text-bgcolor`} />

           <p className={`text-[2rem] font-bold font-PlayfairDisplay`}>Success!</p>

           <p className={`text-graybg text-center w-[25rem] `}>
               A email has been send to your email@domain.com. Please check for an email from company and click on the included link to reset your password.
           </p>

          <Link to={`/dashboard`}>
              <OrngButton text={"Back to home "}/>
          </Link>


        </div>















        </div>
    );
};

export default SuccessPage;