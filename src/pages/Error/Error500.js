import React from 'react'
import Cookie from '../../assets/Error/cookie.png'
import OrngButton from "../../components/common/OrngButton";
import {Link} from "react-router";
import v2 from "../../assets/common/Vector 4.png"
import v1 from "../../assets/common/Vector 3.png"

const Error500 = () => {
    return (
        <div className=" flex flex-col items-center justify-center bg-[#FFF6D8] h-[100vh] ">

            <div className={` absolute  flex flex-col `}>
                <div className={`mb-[-125px]`}>
                    <img src={v1} alt=""/>
                </div>
                <div>
                    <img src={v2} alt=""/>
                </div>
            </div>
            <div className="flex items-center justify-center gap-3 ">
                <p className={`text-[22.875rem] text-bgcolor font-extrabold `}>
                    5
                </p>
                <div className="flex z-50">


                    {/*{!isBroken &&*/}

                    <div className={`flex`}>
                        <img
                            src={Cookie}
                            alt="rollingcookie"
                            className="w-[300px] h-[300px] animate-rollreverse"

                        />
                        <img
                            src={Cookie}
                            alt="rolling cookie"
                            className="w-[300px] h-[300px] animate-roll"

                        />
                    </div>


                </div>
            </div>

            <div className={`flex flex-col items-center justify-center gap-3 ">`}>

                <h2 className="text-3xl font-bold font-PlayfairDisplay text-gray-800 ">
                    Internal Server Error
                </h2>
                <p className="text-gray-600  text-center max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily
                    unavailable.
                </p>

                <Link to={"/dashboard"}>
                    <OrngButton text={"Back to home"}/>
                </Link>
            </div>
        </div>
    )
}

export default Error500