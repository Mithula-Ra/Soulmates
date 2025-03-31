import React, { ReactNode, useEffect } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideBar } from '@/components/Main/SideBar';
import { useUser } from '@/contexts/UserContext';
import { useNavigate } from 'react-router-dom';

interface HomeProps {
    children: ReactNode;
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
        <div className='w-full min-h-screen bg-white flex justify-center p-6'>
            <SidebarProvider>
                <SideBar />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
        </div>
    );
};

export default Home;
