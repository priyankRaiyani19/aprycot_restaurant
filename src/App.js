import "./App.css";
import { Route, Routes } from "react-router";
import DashBoard from "./pages/DashBoard";
import NavBar from "./components/common/NavBar";
import SideBar from "./pages/SideBar";
import { useState } from "react";
import Error404 from "./pages/Error/Error404";
import Footer from "./components/common/Footer";
// import Error500 from "./pages/Error500";

function App() {
    const [isSidebarHovered, setIsSidebarHovered] = useState(false);

    return (
        <div className="flex w-[100vw] h-[100vh] overflow-x-hidden  text-black relative">
            <SideBar onHoverChange={(hovered) => setIsSidebarHovered(hovered)} />
            <div
                className={`transition-all duration-500  flex-grow`}
            >
                <NavBar isSidebarHovered={isSidebarHovered} />

                <Routes>
                    <Route path="/" element={<DashBoard isSidebarHovered={isSidebarHovered} />} />
                    {/* Uncomment if you have an Error404 page */}
                     <Route path="*" element={<Error404/>} />
                </Routes>
                <Footer isSidebarHovered={isSidebarHovered}  />
            </div>
        </div>
    );
}

export default App;
