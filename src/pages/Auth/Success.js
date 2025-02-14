import React from 'react';
import SuccessPage from "../../components/common/auth/successPage";

const Success = () => {
    return (
        <div className=" flex flex-col  bg-mainbg  h-[100vh]">
            <SuccessPage isActive={false} />
        </div>
    );
};

export default Success;