import React from 'react';


const OnlineOrder = ({data, isActive}) => {
    return (
        <div className={` h-full bg-white p-5 rounded-[24px] `}>

            <div>
                <h1 className={`font-bold text-[23px]`}>
                    Online Order
                </h1>
            </div>

            <div className={`flex flex-col gap-2 mt-[10px] `}>
                {
                    data.map((ele) => (

                        <div
                            key={ele.id}
                            className={`  h-[65px]   `}>
                            {/*bg-[#FBE1D0]*/}

                            <div className={`h-[1px] mb-5 mt-[10px] ${ele.id=== 1 ? "bg-gray-200":"bg-[#FBE1D0]"} `}></div>

                            <div className={`flex justify-between`}>


                                <p className={` text-[16px]`}>
                                    {ele.name}
                                </p>
                                <div className={`h-[34px] w-[44px] text-[16px] bg-[#EA6A12] rounded-[24px] text-center justify-center 
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