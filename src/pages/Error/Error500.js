import React from 'react'
import Cookie from '../../assets/Error/cookie.png'
import OrngButton from "../../components/common/OrngButton";
import {Link} from "react-router";
// import Five from '/src/assets/Error500/five.png'

const Error500 = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF6D8]">
            <div className="flex items-center justify-center">
              <p className={`text-[250px] text-orange-500 font-extrabold `} >5</p>
                <div className="flex -space-x-24">
                    <img src={Cookie} alt="cookie" className="w-[300px] h-[300px]" />
                    <img src={Cookie} alt="cookie" className="w-[300px] h-[300px]" />
                </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
                Internal Server Error
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link to={"/"}>
            <OrngButton text={"Back to home"} />
            </Link>
        </div>
    )
}

export default Error500