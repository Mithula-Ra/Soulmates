import React from 'react';
import { NavLink } from 'react-router-dom';

interface SideBarLinkProps {
    Label: string; 
    url: string;
}

const SideBarLink: React.FC<SideBarLinkProps> = ({ Label, url = '/'}) => {
    return (
             <NavLink
                to={url}
                className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg transition duration-200 my-1 ${
                     isActive ? "bg-purple-400 text-white font-semibold" : "bg-muted hover:text-white hover:bg-purple-400"
                      }`
                }>
                {Label}
            </NavLink>
    );
};

export default SideBarLink;
