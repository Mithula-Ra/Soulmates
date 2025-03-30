type Special = {
    id: number;
    name: string;
    day: Date;
  };
  
  const specials: Special[] = [
    { id: 1, name: "Our First Wedding!", day: new Date("2025-04-04") },
    { id: 2, name: "Our First Wedding!", day: new Date("2025-03-30") }
  ];
  
  const Day = () => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()} ${today.toLocaleString("en-US", { month: "long" })} ${today.getDate()}`;
  
    return (
      <div className="flex flex-col items-center gap-0 max-w-fit px-4 py-6 font-Cute mb-12">
        <div className="text-gray-600 text-4xl md:text-6xl">
          {formattedDate}
        </div>
        <div className="text-gray-500 text-lg md:text-xl">
          {specials.find(special => 
            special.day.toDateString() === today.toDateString()
          )?.name || "Welcome Back"}
        </div>
      </div>
    );
  };
  
  export default Day;
  