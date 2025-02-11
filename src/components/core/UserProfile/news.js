import React from 'react';
import {newsData} from "../../../data/userProfile/newsData";

const News = () => {
    return (
        <div  className={` h-[475px] bg-white p-5 rounded-[24px] py-[10px] `} >

            <div>
                <h1 className={`font-bold text-[23px]`}>
                    News
                </h1>
            </div>

            <div className={`flex flex-col gap-2 mt-[10px] `}>
                {
                    newsData.map((ele) => (

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
                                    <p className={`font-bold text-[16px]`}>
                                        {ele.name}
                                    </p>
                                    <p className={`text-[16px]`}>
                                        {ele.desc}
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

export default News;