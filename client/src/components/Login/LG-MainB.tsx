import Password from "./LG-Password";

const MainB = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6 rounded-2xl shadow-lg bg-white dark:bg-black">
      <p className="text-gray-700 dark:text-gray-300 text-center font-light text-2xl">
        Stoppp!
      </p>
      <div className="w-56 h-40 max-w-xs">
        <img 
          src="/login.webp" 
          alt="A secure login illustration" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="text-gray-600 dark:text-gray-400 font-light text-center text-lg max-w-[320px]">
        Before we continue, prove you are half of us… What’s our secret code?
      </p>
      <Password />
    </div>
  );
};

export default MainB;
