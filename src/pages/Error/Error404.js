import React from 'react'
import Burger from "../../assets/Error/error.png"
import OrngButton from "../../components/common/OrngButton";
import {Link} from "react-router";
import v2 from "../../assets/common/Vector 4.png"
import v1 from "../../assets/common/Vector 3.png"


const Error404 = ({isSidebarHovered}) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF6D8]">

            <div className={ ` z-[-1px] absolute mt-[-150px]  flex flex-col ${isSidebarHovered ?"w-[1380px]" :"w-[1540px]"}`}>
                <div className={`mb-[-50px]`}>
                    <img src={v1} alt=""/>
                </div>
                <div>
                    <img src={v2} alt=""/>
                </div>
            </div>

            <div className="flex items-center justify-center gap-6">
                <p className={`text-[250px] font-extrabold text-orange-500`}>4</p>
                <img src={Burger} alt="0" className="w-[400px] h-[400px] mt-[50px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.30)]"/>
                <p className={`text-[250px] font-extrabold text-orange-500`}>4</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily
                unavailable.
            </p>

            <Link to={"/"}>
                <OrngButton text={"Back to home"}/>
            </Link>

        </div>
    )
}


export default Error404