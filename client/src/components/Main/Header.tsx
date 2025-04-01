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
  

const Header = () => {
    const { user } = useUser()


  return(
    <div className="absolute top-6 right-6 flex flex-row justify-end items-center gap-4 p-2">
        <ModeToggle />
        <DropdownMenu>
            <DropdownMenuTrigger>
                <ProfilePicture />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{`${user?.name} ${user?.secondName}`}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default Header;