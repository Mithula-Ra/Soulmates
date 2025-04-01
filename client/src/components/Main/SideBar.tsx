import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"
import SideBarLink from "./SideBarLink"
import SideBarLinkS from "./SideBarLinkS"

export function SideBar() {

  return (
      <Sidebar>
          <SidebarHeader>
              <h2 className="text-xl font-semibold text-white">Menu</h2>
          </SidebarHeader>

          <SidebarContent>
              
              <SidebarGroup>
               <SidebarGroupLabel>Our Zone</SidebarGroupLabel>
               <SideBarLinkS Label="Home" url="/" img="home.webp"/>
               <SideBarLink Label="Games" url="/games" />
               <SideBarLink Label="Time" url="/time" />
               <SideBarLink Label="Calender" url="/calender"/>
              </SidebarGroup>
              
              <SidebarGroup>
               <SidebarGroupLabel>Settings & Appearance</SidebarGroupLabel>
               <SideBarLink Label="Settings" url="/settings"/>
              </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
              <p className="text-gray-400 text-sm p-4 text-center">© 2025 Soulmates</p>
          </SidebarFooter>
      </Sidebar>
  )
}
