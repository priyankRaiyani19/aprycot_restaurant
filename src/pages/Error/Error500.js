import React, {useState} from 'react'
import Cookie from '../../assets/Error/cookie.png'
import OrngButton from "../../components/common/OrngButton";
import {Link} from "react-router";
// import Bcookie1 from "../../assets/Error/brokeCookieL.png";
// import Bcookie2 from "../../assets/Error/brockCookieR.png";
import v2 from "../../assets/common/Vector 4.png"
import v1 from "../../assets/common/Vector 3.png"

const Error500 = ({isSidebarHovered}) => {
    // const [isBroken, setIsBroken] = useState(false);
    return (
        <div className="min-h-[100vh]  flex flex-col items-center justify-center bg-[#FFF6D8] p-[50px] overflow-y-hidden">

            <div className={ ` z-[-1px] absolute  flex flex-col ${isSidebarHovered ?"w-[1380px]" :"w-full"}`}>
                <div className={`mb-[-125px]`}>
                    <img src={v1} alt=""/>
                </div>
                <div>
                    <img src={v2} alt=""/>
                </div>
            </div>
            <div className="flex items-center justify-center ">
              <p className={`text-[350px] z-50 text-orange-500 font-extrabold `} >5</p>
                <div className="flex z-50 -space-x-24 mt-[70px] gap-5">


                    {/*{!isBroken &&*/}
                        (<div className={`flex`}> <img
                            src={Cookie}
                            alt="rollingcookie"
                            className="w-[300px] h-[300px] animate-rollreverse"
                            // onAnimationEnd={() => setIsBroken(true)}
                        />
                        <img
                        src={Cookie}
                    alt="rolling cookie"
                    className="w-[300px] h-[300px] animate-roll"
                    // onAnimationEnd={() => setIsBroken(true)}
                />
                        </div>
                    )
                     {/*  } */}

                    {/*/!* Broken Cookies *!/*/}
                    {/*{isBroken && (*/}
                    {/*    <>*/}
                    {/*        <img*/}
                    {/*            src={Bcookie1}*/}
                    {/*            alt="broken cookie left"*/}
                    {/*            className="w-[300px] h-[300px] animate-bounce-left"*/}
                    {/*        />*/}
                    {/*        <img*/}
                    {/*            src={Bcookie2}*/}
                    {/*            alt="broken cookie right"*/}
                    {/*            className="w-[300px] h-[300px] animate-bounce-right"*/}
                    {/*        />*/}
                    {/*    </>*/}
                    {/*)}*/}
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