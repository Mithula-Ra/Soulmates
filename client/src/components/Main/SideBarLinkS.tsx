import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface SideBarLinkProps {
    Label: string;
    url: string;
    img: string;
}

const SideBarLink: React.FC<SideBarLinkProps> = ({ Label, url = '/', img }) => {
    const { toggleSidebar } = useSidebar();
    const isMobile = useIsMobile();

    const handleClick = () => {
        if (isMobile) {
            toggleSidebar();  // Close the sidebar on mobile when a link is clicked
        }
    };

    return (
        <NavLink 
            to={url}
            className={({ isActive }) =>
                `w-full flex flex-col items-center gap-0 drop-shadow-md bg-muted rounded-lg my-1 p-0 ${
                    isActive ? "bg-purple-500 text-white font-semibold" : "bg-muted hover:text-white hover:bg-purple-400"
                }`}
            onClick={handleClick}
        >
            <img 
                src={`SideBar/${img}`} 
                alt={Label} 
                className="w-full h-9 object-cover rounded-t-lg" 
            />
            <div className="w-full px-4 pt-1 pb-2 rounded-b-lg transition duration-200">
                {Label}
            </div>
        </NavLink>
    );
};

export default SideBarLink;
