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
          <SidebarHeader className="dark:bg-black">
              <h2 className="text-xl font-light text-gray-400 min-h-12 p-2">Soulmates </h2>
          </SidebarHeader>

          <SidebarContent className="dark:bg-black">
              
              <SidebarGroup>
               <SidebarGroupLabel>Our Zone</SidebarGroupLabel>
               <SideBarLinkS Label="Home" url="/" img="home.webp"/>
               <SideBarLinkS Label="Games" url="/games" img="games.webp"/>
               <SideBarLink Label="Time" url="/time" />
               <SideBarLink Label="Calender" url="/calender"/>
              </SidebarGroup>
              
              <SidebarGroup >
               <SidebarGroupLabel>Settings & Appearance</SidebarGroupLabel>
               <SideBarLink Label="Settings" url="/settings"/>
              </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="dark:bg-black">
              <p className="text-gray-400 text-sm p-4 text-center">© 2025 Soulmates</p>
          </SidebarFooter>
      </Sidebar>
  )
}
