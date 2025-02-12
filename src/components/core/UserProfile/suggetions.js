import React from 'react';
import {suggestionData} from '../../../data/userProfile/suggestionData'


const Suggetions = () => {
    return (

        <div className={`  bg-white p-5 rounded-[24px] py-[10px] `}>

            <h1 className={`font-bold text-[23px]`}>
               Suggetions
            </h1>

            <div className={`flex flex-col gap-2 mt-[10px] `}>
                {
                    suggestionData.map((ele) => (

                        <div
                            key={ele.id}
                            className={ `  h-[130px]   `} >

                            <hr className={`mb-5 `}/>

                            <div className={`flex items-center gap-[24px]  `} >
                                <div className={`mt-[16px] h-[62px] w-[102px]`}>
                                    <img src={ele.img} alt=""
                                         className={`h-[62px] w-[102px] `}
                                    />
                                </div>

                                <div className={`flex flex-col w-[368px] `} >
                                    <p className={` text-[16px]`}>
                                        {ele.name}
                                    </p>
                                    <p className={`text-[16px] text-gray-500`}>
                                        {ele.count}+ Options
                                    </p>
                                </div>


                            </div>



                        </div>



                    ))
                }



            </div>



        </div>

            );
};

export default Suggetions;