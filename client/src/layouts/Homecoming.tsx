import { ModeToggle } from "@/components/commons/ModeToggle";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/contexts/Themeprovider";

interface HomecomingProps {
    children?:  React.ReactNode;
}

const Homecoming : React.FC<HomecomingProps>  = ({ children }) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light")
  }, []);

  return(
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className={`absolute top-4 right-4 z-30`}>
          <ModeToggle />
        </div>
      <div className="w-full flex flex-col justify-start gap-4 items-center max-w-sm md:max-w-3xl">
        {children ?? <Outlet />}
      </div>
    </div>
  )
}

export default Homecoming;

