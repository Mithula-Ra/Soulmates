import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
  
  export function SideBar() {
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
        </SidebarContent>
        <SidebarFooter>
        </SidebarFooter>
      </Sidebar>
    )
  }
  