import React, { ReactNode, useEffect } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideBar } from '@/components/Main/SideBar';
import { useUser } from '@/contexts/UserContext';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '@/components/Main/Header';

interface HomeProps {
    children?: ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            navigate('/login/user'); // Redirect to login if user is null
        }
    }, [user, navigate]);

    if (user === null) {
        return null; // Prevent rendering if user is null
    }

    return (
        <div className="w-full min-h-screen bg-white dark:bg-black flex flex-col">
            <Header />

            <div className="flex flex-1 py-6 px-4 md:px-6">
                <SidebarProvider>
                    <SideBar />
                    <main className="flex-1">
                        <SidebarTrigger className='mt-2' />
                        {children ?? <Outlet />} {/* Render children if passed, else use Outlet */}
                    </main>
                </SidebarProvider>
            </div>
        </div>
    );
};

export default Home;
