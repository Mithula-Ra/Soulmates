import React, { ReactNode } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SideBar } from '@/components/SideBar';

interface MainProps {
    children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <div className='w-full min-h-screen bg-white flex justify-center'>
            <SidebarProvider>
             <SideBar/>
             <main>
             <SidebarTrigger />
             {children}
             </main>
            </SidebarProvider>
            
        </div>
    );
}

export default Main;
