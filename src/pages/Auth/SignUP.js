import React from 'react';
import FormPage from "../../components/common/auth/formPage";
import circle from "../../assets/Auth/SignIn/halfcircle.png";
import img1 from "../../assets/Auth/SignIn/Frame 37293.png";
import img2 from "../../assets/Auth/SignIn/half2.png";
import img4 from "../../assets/Auth/SignIn/Frame 37295.png";
import img3 from "../../assets/Auth/SignIn/halfimg1.png";
import img5 from "../../assets/Auth/SignIn/Frame 37298.png";


const SignUp = () => {
    return (
        <div className=" flex flex-col  bg-mainbg  h-[100vh]">

            <div className={`w-full z-[51]`}>
                <FormPage signUp={true}
                          heading="Sign Up"
                          desc="Create your Hope UI account"
                />
            </div>

            <div className={`absolute w-full z-[60] flex`}>

                <img src={circle} alt="" className={`absolute w-[27rem] h-[18rem] rotate-[5deg] ml-[60rem] mt-[20rem]`}/>
                <img src={img1} alt="" className={`absolute w-[8rem] h-[8rem] ml-[80rem] mt-[21rem]`}/>
                <img src={img2} alt=""  className={`absolute w-[8rem] h-[5rem] rotate-[20deg] ml-[57rem] mt-[32rem]`}/>



                <img src={img4} alt=""  className={`absolute w-[8rem] h-[8rem] ml-[61rem] mt-[20rem]`}/>
                <img src={img5} alt=""  className={`absolute w-[15rem] h-[15rem] ml-[67rem] mt-[31rem] `}/>
                <img src={img3} alt=""  className={`absolute z-[60] w-[8rem] h-[5rem] -rotate-[18deg] ml-[82rem] mt-[33rem] ` }/>





            </div>


        </div>

    );
};

export default SignUp;