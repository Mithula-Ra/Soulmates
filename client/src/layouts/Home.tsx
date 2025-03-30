import React, { ReactNode } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SideBar } from '@/components/Main/SideBar';

interface HomeProps {
    children: ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
    return (
        <div className='w-full min-h-screen bg-white flex justify-center p-6'>
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

export default Home;
