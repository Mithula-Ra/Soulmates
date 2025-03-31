import Password from "./LG-Password";

const Main = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6 rounded-2xl shadow-lg bg-white">
      <p className="text-gray-700 text-center text-2xl font-medium">
        Stoppp!
      </p>
      <div className="w-56 h-40 max-w-xs">
        <img 
          src="/login.webp" 
          alt="A secure login illustration" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="text-gray-600 text-center text-lg font-medium max-w-[320px]">
        Before we continue, prove you are half of us… What’s our secret code?
      </p>
      <Password />
    </div>
  );
};

export default Main;
