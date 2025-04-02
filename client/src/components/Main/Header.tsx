import { ModeToggle } from "../commons/ModeToggle";
import ProfilePicture from "./ProfilePicture";
import { useUser } from "@/contexts/UserContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const { user } = useUser()


  return(
    <div className="absolute top-6 right-6 flex flex-row justify-end items-center gap-4 p-2">
        <ModeToggle />
        <DropdownMenu>
            <DropdownMenuTrigger>
                <ProfilePicture />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="pb-4">
                <DropdownMenuLabel>{`${user?.name} ${user?.secondName}`}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link className="w-full" to={"/games"}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" to={"/settings"}>Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" to={"/games"}>Themes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem><Logout /></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default Header;

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('authToken');

    setUser(null); // Clear user context

    navigate('/login'); // Redirect to login
  };

  return (
    <button 
      onClick={handleLogout} 
      className="w-full text-left dark:text-white rounded-md transition hover:text-red-600 hover:dark:text-red-600">
      Logout
    </button>
  );
};

