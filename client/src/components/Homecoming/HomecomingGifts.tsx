import { useUser } from "@/contexts/UserContext";
import { Outlet, useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/Themeprovider";
import { useEffect } from "react";

interface HomecomingGifts {
    children?: React.ReactNode; // Allow optional children
}

const HomecomingGifts: React.FC<HomecomingGifts> = ({ children }) => {
  
    const { user } = useUser();
    const navigate = useNavigate();
    const {setTheme} = useTheme()

    useEffect(() => {
        if (!user) {
            navigate("/homecoming");
            setTheme('light');
        }
    }, [user, navigate]);

    if (user?.id === 0) {
        return (
            <div>
                {user.name}
            </div>
        );
    }
    
    if (user?.id === 1) {
        return (
                <div>
                   {children ?? <Outlet />}
                </div>
        );
    }

};

export default HomecomingGifts;
