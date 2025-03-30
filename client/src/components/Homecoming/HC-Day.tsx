import { useFirstLogin } from "@/contexts/FirstLoginContext";
  
  const Day = () => {
    const {isFirstLogin} = useFirstLogin();
    
    const today = new Date();
    const formattedDate = `${today.getFullYear()} ${today.toLocaleString("en-US", { month: "long" })} ${today.getDate()}`;
  

    return (
      <div className="flex flex-col items-center gap-0 max-w-fit px-4 font-Cute">
        <div className="text-gray-600 text-6xl ">
          {formattedDate}
        </div>
        <div className={`text-gray-500  mb-10 ${isFirstLogin ? "text-2xl md:text-3xl" :"text-xl md:text-2xl"}`}>
          {isFirstLogin ? "Our First Wedding!" : "Welcome Back"}
        </div>
        <div className="text-gray-600 text-3xl md:text-4xl mb-4">
            Continue as...
        </div>
      </div>
    );
  };
  
  export default Day;
  