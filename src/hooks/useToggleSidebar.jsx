import React, {useState} from 'react';

const UseToggleSidebar = () => {
    const [isSidebarHovered, setIsSidebarHovered] = useState(false);
    return { isSidebarHovered ,setIsSidebarHovered };
};

export default UseToggleSidebar;