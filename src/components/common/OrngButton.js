import React from 'react';

const OrngButton = ({text}) => {
    return (
        <div className={`text-[16px] bg-[#EA6A12] rounded-[100px] px-[10px] 
        py-2 flex items-center justify-center w-[150px] text-white` } >
            <button>
                {text}
            </button>
        </div>
    );
};

export default OrngButton;