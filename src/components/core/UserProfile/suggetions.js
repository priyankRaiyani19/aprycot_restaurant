import React from 'react';
import {suggestionData} from '../../../data/userProfile/suggestionData'


const Suggetions = () => {
    return (

        <div className={`  bg-white p-[1rem] rounded-[24px] py-[10px] `}>

            <h1 className={`font-semibold font-PlayfairDisplay text-[1.5rem] p-[1rem]`}>
               Suggetions
            </h1>

            <div className={`flex flex-col `}>
                {
                    suggestionData.map((ele) => (

                        <div
                            key={ele.id}
                            className={ ` p-[0.5rem]  `} >

                            <hr className={`mb-5 `}/>

                            <div className={`flex items-center gap-[1.5rem]  `} >
                                <div className={`mt-[1rem] `}>
                                    <img src={ele.img} alt=""
                                         className={`h-[7rem] w-[7rem] `}
                                    />
                                </div>

                                <div className={`flex flex-col gap-[0.5rem] `} >
                                    <p className={` text-[1rem]`}>
                                        {ele.name}
                                    </p>
                                    <p className={`text-[16px] text-grayfont`}>
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