import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useUser } from "@/contexts/UserContext";


interface ContainerProps {
  title: string;
  children: React.ReactNode;
  userID: number;
}

const Message: React.FC<ContainerProps> = ({ title, children, userID }) => {
    const {user, users} = useUser();


  return (
    <div className="w-[80vw] md:w-[300px] max-w-lg min-h-[50px] flex flex-col justify-start items-start bg-white/30 rounded-lg shadow-md z-20">
      {/* Title Bar */}
      <div className="h-[50px] w-full bg-white/40 flex flex-row gap-4 justify-start items-center px-4 text-gray-800 rounded-t-lg">
       <Avatar className="opacity-80">
        <AvatarImage src={`/Profile/${user && userID === 1? users[0].id : users[1].id}.webp`} />
        <AvatarFallback>{user && userID === 1? users[0].initials : users[1].initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center items-start">
            <span className="text-[10px] leading-none font-light text-gray-600">a new Message from {user && userID === 1? users[0].name : users[1].name}</span>
            <div className="text-base font-normal">{title}</div>
        </div>
        </div>
      
      {/* Message Text */}
      <div className="p-4 text-gray-900">
        {children}
      </div>
    </div>
  );
};

export default Message;
