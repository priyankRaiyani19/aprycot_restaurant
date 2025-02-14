import React from 'react';

const Footer = ({isSidebarHovered}) => {
    return (
        <div>

            <div className={`flex items-center justify-between p-3 text-[0.813rem]`}>
                <div className={`flex items-center gap-[1.5rem] `}>

                    <div>
                        Privacy Policy
                    </div>
                    <div>
                        Terms of Use
                    </div>
                </div>


                <div>
                    © 2021 Aprycot, Made with ❤ by <span className={`text-bgcolor`}> IQONIC Design.</span>
                </div>


            </div>


        </div>

    );
};

export default Footer;