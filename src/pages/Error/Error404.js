import React from 'react'
import Burger from "../../assets/Error/error.png"
import OrngButton from "../../components/common/OrngButton";
import {Link} from "react-router";
import v2 from "../../assets/common/Vector 4.png"
import v1 from "../../assets/common/Vector 3.png"
import img from "../../assets/Error/4.png"


const Error404 = ({isSidebarHovered}) => {
    return (
        <div className=" flex flex-col items-center justify-center bg-[#FFF6D8] h-[100vh]">

            <div className={ `  absolute  flex flex-col`}>
                <div className={`mb-[-50px]`}>
                    <img src={v1} alt=""/>
                </div>
                <div>
                    <img src={v2} alt=""/>
                </div>
            </div>

            <div className="flex items-center justify-center ">

                <img src={img} alt="" className={`w-[10.375rem] h-[12.25rem]`}/>
                <img src={Burger} alt="0" className="w-[20.5rem] h-[20.5rem] mt-[50px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.30)]"/>
                <img src={img} alt="" className={`w-[10.375rem] h-[12.25rem]`}/>
            </div>

          <div className={`flex flex-col items-center justify-center gap-6`}>
              <h2 className="text-3xl font-bold font-PlayfairDisplay text-gray-800 ">
                  Oops! Page Not Found
              </h2>
              <p className="text-gray-600 text-center max-w-md ">
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


export default Error404