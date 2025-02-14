import React from 'react';
import SuccessPage from "../../components/common/auth/successPage";

const ResetPassword = () => {
    return (
        <div className=" flex flex-col  bg-mainbg  h-[100vh]">
            <SuccessPage isActive={true} />
        </div>
    );
};

export default ResetPassword;