import { FaSearch, FaBell, FaShoppingCart } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { HiUserCircle } from "react-icons/hi";

const NavBar = ({isSidebarHovered}) => {
    return (
        <div className={` z-[200] flex items-center  justify-center  h-[83px]
         border-b-2 bg-gray-50 overflow-x-hidden px-10 
         transition duration-500 ${isSidebarHovered ? "w-[90vw]  " : "w-[100vw] " }   ` }>

            <div className="w-10/12 h-full flex ml-[-250px] justify-between items-center ">
                {/* Left Part */}
                <div className="flex items-center border-2 border-[#E3E1E1] rounded-full h-[35px] px-3 relative w-[300px]">
                    <FaSearch className="text-gray-400 w-4 h-4" />
                    <input
                            type="text"
                        placeholder="Search..."
                        className="bg-transparent text-gray-700 ml-3 focus:outline-none w-full placeholder-gray-400"
                        aria-placeholder="Search input"
                    />
                </div>

                {/* Right Part */}
                <div className="flex items-center gap-5 mr-[-150px]">
                    <button aria-label="Notifications">
                        <FaBell className="w-6 h-6 text-gray-700" />
                    </button>
                    <button aria-label="Messages">
                        <CiMail className="w-6 h-6 text-gray-700" />
                    </button>
                    <button aria-label="Cart">
                        <FaShoppingCart className="w-6 h-6 text-gray-700" />
                    </button>
                    <div className="flex items-center gap-3">
                        <HiUserCircle className="w-10 h-10 text-gray-700" />
                        <div>
                            <p className="text-sm font-medium text-gray-800">Priyank Raiyani</p>
                            <p className="text-xs text-gray-500">Marketing Administrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
