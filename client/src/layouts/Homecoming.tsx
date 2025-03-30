import { ReactNode } from "react";

interface HomecomingProps {
    children: ReactNode;
}

const Homecoming : React.FC<HomecomingProps>  = ({ children }) => {
  return(
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full flex flex-col justify-start gap-4 items-center max-w-sm md:max-w-3xl">
        {children}
      </div>
    </div>
  )
}

export default Homecoming;

