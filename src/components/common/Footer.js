import React from 'react';

const Footer = ({isSidebarHovered}) => {
    return (
        <div className={` z-[200] flex items-center  justify-center  h-[55px]
          bg-white overflow-x-hidden px-10 
         transition duration-500 ${isSidebarHovered ? "w-[1,800px]  " : "w-[1,800px] "}   `}>

            <div className="w-10/12 h-full flex ml-[-250px] justify-between items-center ">
                <div className={`flex gap-[24px]`}>
                    <p>
                        Privacy Policy
                    </p>

                    <p>
                        Terms of Use
                    </p>
                </div>

                <div className={`${isSidebarHovered ? "mr-[-150px]  " : " mr-[-150px] "}  `}>
                    © 2021 Aprycot, Made with <span className={`text-red-700`}>❤</span> by IQONIC Design.

                </div>

            </div>
        </div>

    );
};

export default Footer;