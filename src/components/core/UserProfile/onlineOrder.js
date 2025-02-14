import React from 'react';


const OnlineOrder = ({data, isActive}) => {
    return (
        <div className={`  bg-white p-5 rounded-[24px] `}>

            <div>
                <h1 className={`font-semibold text-[1.5rem] font-PlayfairDisplay`}>
                    Online Order
                </h1>
            </div>

            <div className={`flex flex-col  gap-2 mt-[1rem] `}>
                {
                    data.map((ele) => (

                        <div
                            key={ele.id}
                            className={`   `}>
                            {/*bg-[#FBE1D0]*/}

                            <div className={`h-[1px] mb-[1rem] mt-[1rem] ${ele.id=== 1 ? "bg-horizontalGray":"bg-horizontal"} `}></div>

                            <div className={`flex justify-between items-center p-[0.2rem] `}>


                                <p className={` text-[1rem]`}>
                                    {ele.name}
                                </p>
                                <div className={`px-5 p-2 text-[1rem] bg-[#EA6A12] rounded-[2.5rem] text-center justify-center text-white
                                     ${
                                    isActive ? "block" : "hidden"
                                }`}
                                >
                                    1
                                </div>


                            </div>


                        </div>


                    ))
                }


            </div>


        </div>
    );
};

export default OnlineOrder;