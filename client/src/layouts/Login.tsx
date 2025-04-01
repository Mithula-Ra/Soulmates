import Footer from "@/components/commons/Footer";
import { ModeToggle } from "@/components/commons/ModeToggle";
import { useFirstLogin } from "@/contexts/FirstLoginContext";

interface LoginProps {
    children: React.ReactNode;
}

const Login: React.FC<LoginProps> = ({ children }) => { 
  const {isFirstLogin} = useFirstLogin();


  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center bg-[#FFF1F6] dark:bg-gray-900 p-6 md:p-10">
      <div>
        <div className={`absolute top-4 right-4 z-30`}>
          <ModeToggle />
        </div>
        <div className={`absolute top-4 right-4 h-9 w-9 rounded-full bg-purple-400 opacity-0 z-20 ${isFirstLogin ? "animate-pulse" : ""}`}></div>
      </div>
      <div className="w-full flex flex-col justify-start gap-4 items-center max-w-sm md:max-w-3xl">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
