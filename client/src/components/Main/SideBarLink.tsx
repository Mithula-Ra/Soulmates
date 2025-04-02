import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile"

interface SideBarLinkProps {
    Label: string;
    url: string;
}

const SideBarLink: React.FC<SideBarLinkProps> = ({ Label, url = '/'}) => {
    const { toggleSidebar } = useSidebar();
    const isMobile = useIsMobile()

    const handleClick = () => {
        if(isMobile){
        toggleSidebar();
        }
    };

    return (
        <NavLink
            to={url}
            className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition duration-200 my-2 opacity-80 ${
                    isActive ? "bg-purple-700 text-white font-semibold" : "dark:bg-gray-500 bg-muted hover:text-white hover:bg-purple-400 dark:hover:bg-muted "
                }`}
            onClick={handleClick}
        >
            {Label}
        </NavLink>
    );
};

export default SideBarLink;
