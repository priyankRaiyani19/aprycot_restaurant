import { FaSearch, FaBell } from "react-icons/fa";
// import useToggleSidebar from "../../hooks/useToggleSidebar";
import {IoMail} from "react-icons/io5";
import {BsFillCartDashFill} from "react-icons/bs";
import profileLogo from "../../assets/navBar/userProfile.png"

const NavBar = () => {
    // const { isSidebarHovered } = useToggleSidebar()
    return (
        <div className={`p-2`}>

            <div className={`flex items-center justify-between p-3`}>


                <div className="flex items-center border-2 border-[#E3E1E1] rounded-full h-[35px] px-3 relative w-[300px]">
                    <FaSearch className="text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent text-gray-700 ml-3 focus:outline-none w-full placeholder-gray-400"
                        aria-placeholder="Search input"
                    />
                </div>

                <div className={`flex items-center gap-5`}>
                    <div className={`text-bgcolor`}>
                        <FaBell />
                    </div>
                    <div className={`text-bordercolor`} >
                        <IoMail />
                    </div>
                    <div>
                        <BsFillCartDashFill />
                    </div>
                    <div className={`flex items-center justify-center gap-2`}>

                        <div>
                            <img src={profileLogo} alt=""/>
                        </div>

                        <div className={`flex flex-col text-[1rem]`}>
                            <p>
                                Austin Robertson
                            </p>
                            <p>
                                Marketing Administrator
                            </p>
                        </div>


                    </div>


                </div>



            </div>



        </div>
    );
};

export default NavBar;
