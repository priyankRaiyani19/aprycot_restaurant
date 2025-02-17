import  {useState} from 'react';

const SidebarToggle = () => {

    const [isSidebarHovered, setIsSidebarHovered] = useState(null);

    return { isSidebarHovered ,setIsSidebarHovered };
};

export default SidebarToggle;