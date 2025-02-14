import React from 'react';
import v1 from "../../../assets/common/Vector 3.png";
import v2 from "../../../assets/common/Vector 4.png";
import circle from "../../../assets/Auth/Ellipse 188.png"
import logo from "../../../assets/sidebar/full_logo.png"
import OrngButton from "../OrngButton";
import insta from "../../../assets/Auth/Instagram.png"
import linkedIn from "../../../assets/Auth/Linkedin.png"
import fb from "../../../assets/Auth/Facebook.png"
import Gmail from "../../../assets/Auth/Gmail.png"
import {Link} from "react-router";

const FormPage = ({heading, desc, isActive, text, signin, signUp, Success, ResetPass}) => {
    return (<div className=" flex flex-col  bg-mainbg  h-[100vh]">
            <div className={`fixed -z-1 flex flex-col mt-[10rem]  z-[5] w-full  `}>
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

            <div className={`ml-[5rem] -mt-[32rem] z-10 `}>
                <img src={logo} alt=""/>
            </div>


            <div className={`ml-[15rem] absolute mt-[10rem] z-10 flex flex-col items-center justify-center `}>


                <p className={`text-[2.5rem] font-bold font-PlayfairDisplay`}>{heading}</p>


                <p className={`text-graybg `}>{desc}</p>

                <div className={`flex flex-col gap-[1rem] w-[15rem]`}>

                    <div
                        className={`${signin === true ? "block  flex-col gap-[1rem]" : "hidden"} -ml-[5rem] -mr-[5rem] flex `}>


                        <div className={`flex flex-col `}>
                            <label htmlFor="email">
                                Email:
                            </label>
                            <input type="text"
                                   placeholder="Enter your email address"
                                   className={`bg-transparent border-2 rounded-full w-full px-5 py-2 border-bgcolor`}

                            />


                        </div>
                        <div className={`flex flex-col `}>
                            <label htmlFor="password">
                                Password:
                            </label>
                            <input type="password"
                                   placeholder="Enter your password"
                                   className={`bg-transparent border-2 rounded-full w-full px-5 py-2 border-bgcolor`}

                            />


                        </div>
                        <div className={`flex justify-between`}>
                            <div>
                                <input
                                    type={"checkbox"}
                                />
                                <label htmlFor="checkbox"> Remember me? </label>
                            </div>
                            <div className={`text-bgcolor`}>
                                Forgot password
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${signUp === true ? "block  flex-col gap-[1rem]" : "hidden"} -ml-[5rem] -mr-[5rem] flex `}>
                        <div className={`flex gap-2   `}>
                            <div className={`flex flex-col gap-2 `}>
                                <label htmlFor="FirstName">
                                    First Name:
                                </label>
                                <input type="text"
                                       placeholder="Enter your First Name"
                                       className={`bg-white border-2 rounded-full  px-5 py-1 border-bgcolor`}
                                />
                            </div>
                            <div className={`flex flex-col gap-2 `}>
                                <label htmlFor="Last Name">
                                    Last Name:
                                </label>
                                <input type="text"
                                       placeholder="Enter your Last Name"
                                       className={`bg-white border-2 rounded-full px-5 py-1 border-bgcolor`}
                                />
                            </div>
                        </div>
                        <div className={`flex gap-2   `}>
                            <div className={`flex flex-col gap-2 `}>
                                <label htmlFor="email">
                                    Email:
                                </label>
                                <input type="text"
                                       placeholder="Enter your email address"
                                       className={`bg-white border-2 rounded-full  px-5 py-1 border-bgcolor`}
                                />
                            </div>
                            <div className={`flex flex-col gap-2`}>
                                <label htmlFor="Phone">
                                    PhoneNo:
                                </label>
                                <input type="number"
                                       placeholder="Enter contactno"
                                       className={`bg-white border-2 rounded-full px-5 py-1 border-bgcolor`}
                                />
                            </div>
                        </div>
                        <div className={`flex gap-2   `}>

                            <div className={`flex flex-col gap-2 `}>
                                <label htmlFor="Password">
                                    Password:
                                </label>
                                <input type="Password"
                                       placeholder="Enter your password"
                                       className={`bg-white border-2 rounded-full  px-5 py-1 border-bgcolor`}
                                />
                            </div>
                            <div className={`flex flex-col gap-2`}>
                                <label htmlFor="confirmpassword">
                                    Confirm Password:
                                </label>
                                <input type="password"
                                       placeholder="Enter confirm password"
                                       className={`bg-white border-2 rounded-full px-5 py-1 border-bgcolor`}

                                />
                            </div>
                        </div>


                        <div className={`flex items-center justify-center`}>
                            <div>
                                <input
                                    type={"checkbox"}
                                />
                                <label htmlFor="checkbox" className={`text-graybg`}> I agree with the terms of
                                    use </label>
                            </div>

                        </div>
                    </div>

                    <div className={`flex items-center justify-center ${signin === true ? "block" : "hidden"}`}>
                        <Link to={"/dashboard"}>
                        <OrngButton text={`${signin === true ? "Sign in" : ""} `}/>
                        </Link>
                    </div>
                    <div className={`flex items-center justify-center ${signUp === true ? "block" : "hidden"}`}>
                   <Link to={"/dashboard"}>
                       <OrngButton text={`${signUp === true ? "Sign Up" : ""} `}/>
                   </Link>
                    </div>

                    <div className={`flex justify-center  ${signin ? "block" : "hidden"}`}>

                        or sign in with other accounts?


                    </div>
                    <div className={`flex justify-center  ${signUp ? "block" : "hidden"}`}>

                        or sign up with other accounts?


                    </div>

                    <div
                        className={`flex justify-center items-center gap-[1.5rem]    ${signin || signUp ? "block" : "hidden"}               `}>

                        <img src={Gmail} alt=""/>
                        <img src={insta} alt="" className={`w-[1.5rem] h-[1.5rem] -mt-[0.5rem]`}/>
                        <img src={fb} alt=""/>
                        <img src={linkedIn} alt=""/>

                    </div>
                </div>

                <div className={`flex justify-center  ${signUp ? "block" : "hidden"}`}>

                    Already have an Account <Link to={"/signin"} className={`ml-[0.4rem] text-bgcolor`}> Sign in </Link>
                </div>

                <div className={`w-full ${signin ? "block" : "hidden"}`}>

                    Don’t have an account? <Link to={"/signup"} className={`ml-[0.4rem] text-bgcolor`}>Click here to
                    sign up.</Link>
                </div>


            </div>








        </div>);
};

export default FormPage;