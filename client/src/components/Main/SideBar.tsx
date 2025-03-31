import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import { useUser } from "@/contexts/UserContext"
import { Button } from "../ui/button";
  
  export function SideBar() {
    const { user, setUser } = useUser();

    return (
      <Sidebar>
        <SidebarHeader>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup />
            <Link to="/Homecoming">
              <button className="mx-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
                Go to Homecoming
              </button>
            </Link>
            <Link to="/login">
              <button className="mx-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
                Go to login
              </button>
            </Link>
          <SidebarGroup />
          <SidebarGroup>
              <div className="py-6 text-black dark:text-white">
                {user?.name}
              </div>
              <Button onClick={() => setUser(null)}>Reset User</Button>


          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
        </SidebarFooter>
      </Sidebar>
    )
  }
  