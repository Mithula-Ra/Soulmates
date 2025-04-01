import { useState, useEffect } from "react";

const Couple = () => {
    const [daysTogether, setDaysTogether] = useState(0);

    useEffect(() => {
        const startDate = new Date(2023, 9, 20).getTime(); // Get timestamp
        const today = new Date().getTime();
        const diffTime = today - startDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        setDaysTogether(diffDays);
      }, []);

  return(
    <div className="mt-4">
  <div className="relative bg-gradient-to-br from-indigo-900 to-purple-500 shadow-xl shadow-indigo-900/50 min-w-[200px] min-h-32 rounded-3xl">
    <span className="absolute top-[-10%] left-[65%] w-[70px] h-[70px] rounded-full bg-yellow-300/90 shadow-xl shadow-gray-300"></span>
    <span className="absolute top-0 left-[85%] w-[10px] h-[10px] rounded-full bg-gray-500"></span>
    <span className="absolute top-[30%] left-[75%] w-[5px] h-[5px] rounded-full bg-gray-500"></span>
    <ul className="relative">
        <li className="absolute w-[3px] h-[3px] rounded-full bg-white top-[38px] left-[65%]"></li>
        <li className="absolute w-[3px] h-[3px] rounded-full bg-white top-[45px] left-[53%] opacity-75"></li>
        <li className="absolute opacity-0 w-[2px] h-[2px] rounded-full bg-white rotate-45 top-[12px] left-[35%] animate-[meteor_1.7s_infinite_linear] delay-500"></li>
        <li className="absolute w-[3px] h-[3px] rounded-full bg-white rotate-45 top-[10px] opacity-90 left-[50%]"></li>
        <li className="absolute opacity-0 w-[1px] h-[15px] rounded-full bg-white rotate-45 top-[30px] left-[55%] animate-[meteor_1.5s_infinite_linear]"></li>
    </ul>
    <div className="relative left-0 mx-8 top-[60px] flex flex-col justify-start">
        <span className="text-xs text-gray-400 font-normal">Days together...</span>
        <span className=" text-2xl text-white font-light">{`${daysTogether} Days`}</span>
    </div>
</div>
    </div>
  )
}

export default Couple;