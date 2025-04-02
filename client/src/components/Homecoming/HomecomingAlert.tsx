import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { useTheme } from "@/contexts/Themeprovider";
import { useNavigate } from "react-router-dom";
import Loading from "../commons/Loading";

const HomecomingAlert = () => {
    const [loading, setLoading] = useState(false);
    const { setTheme} = useTheme();
    const navigate = useNavigate();

const HandleClick = () => {
        
        setLoading(true);
        setTheme("light");
        setTimeout(() => {
            setLoading(false);
            navigate("/homecoming"); 
        }, 3000);
};

    return (
        <div className="flex flex-col items-center min-w-[300px] min-h-[400px] gap-6 p-6 rounded-2xl shadow-lg bg-white dark:bg-black">
            <p className="text-gray-700 dark:text-gray-300 text-center font-light text-2xl">
                 2025 April 04
            </p>
            <p className="text-gray-600 dark:text-gray-300 font-light text-center text-lg max-w-[320px]">
                looks like Today is a Special Day for Us!!
            </p>
        <div className="w-48 h-FIT max-w-xs">
            <img 
                src="/Homecoming/Special.webp" 
                alt="A secure login illustration" 
                className="w-full h-full object-cover rounded-lg"
            />
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 font-light text-center text-lg max-w-[320px]">
            Shall we step into our beautiful day together? 💖 
            </p>
                    <AlertDialog>
                        <AlertDialogTrigger>
                            <Button size={"lg"}>Yess!! Let's Goo..</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="max-w-[300px]">
                            <AlertDialogHeader>
                                <AlertDialogTitle className="mb-6">Have to take care of our Gems first 🥰</AlertDialogTitle>
                                <AlertDialogDescription>
                                Your Gift comes with a little magic—your screen will switch to light mode.  If you're in dark mode, you might want to adjust your brightness..  
                            </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter  className="mt-6">
                                <AlertDialogAction>
                                    <Button className="w-full h-full"
                                        onClick={HandleClick}
                                    >                                        
                                        Okay Done..
                                    </Button>
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                   {loading && ( <div className={`absolute inset-0 flex flex-col gap-2 justify-center items-center bg-black/90 animate-Lighten-1`}>
                        
                        <div className="animate-Lighten-2 text-white">I love you 💕</div>
                        <Loading></Loading>
                       
                    </div> )}
                </div>
    );
};

export default HomecomingAlert;
