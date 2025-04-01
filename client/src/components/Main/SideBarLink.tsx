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
                `block px-4 py-2 rounded-lg transition duration-200 my-1 ${
                    isActive ? "bg-purple-700 text-white font-semibold" : "bg-muted hover:text-white hover:bg-purple-400"
                }`}
            onClick={handleClick}
        >
            {Label}
        </NavLink>
    );
};

export default SideBarLink;
