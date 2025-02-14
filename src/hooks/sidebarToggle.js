import  {useState} from 'react';

const SidebarToggle = () => {

    const [isSidebarHovered, setIsSidebarHovered] = useState(false);
    return { isSidebarHovered ,setIsSidebarHovered };
};

export default SidebarToggle;