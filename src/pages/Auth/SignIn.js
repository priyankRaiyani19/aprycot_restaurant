import React from 'react';
import FormPage from "../../components/common/auth/formPage";
import circle from "../../assets/Auth/SignIn/Ellipse 186.png"
import img1 from "../../assets/Auth/SignIn/Frame 37293.png"
import img2 from "../../assets/Auth/SignIn/Frame 37294.png"
import img3 from "../../assets/Auth/SignIn/Frame 37295.png"
import img4 from "../../assets/Auth/SignIn/Frame 37296.png"
import img5 from "../../assets/Auth/SignIn/Frame 37298.png"
import img6 from "../../assets/Auth/SignIn/Frame 37299.png"





const SignIn = () => {
    return (
        <div className=" flex  bg-mainbg  h-[100vh]">

           <div className={`w-full z-[51]`}>

               <FormPage signin={true} heading="Sign In" desc="Sign in to stay connected." />
           </div>

            <div className={`absolute w-full z-[60] flex`}>

                <img src={circle} alt="" className={`absolute w-[28rem] h-[28rem] ml-[50rem] mt-[12rem]`}/>
                <img src={img1} alt="" className={`absolute w-[9rem] h-[9rem] ml-[68rem] mt-[11rem]`}/>
                <img src={img2} alt=""  className={`absolute w-[9rem] h-[9rem] ml-[52rem] mt-[11rem]`}/>
                <img src={img3} alt=""  className={`absolute w-[9rem] h-[9rem] ml-[47rem] mt-[20rem]`}/>
                <img src={img4} alt=""  className={`absolute w-[9rem] h-[8rem] ml-[74rem] mt-[23rem]`}/>
                <img src={img5} alt=""  className={`absolute w-[15rem] h-[15rem] ml-[49rem] mt-[29rem]`}/>
                <img src={img6} alt=""  className={`absolute w-[9rem] h-[9rem] ml-[68rem] mt-[33rem]`}/>




            </div>








        </div>
    );
};

export default SignIn;