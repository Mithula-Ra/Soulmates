import React from "react";

type Props = {
  color?: string;  
  opacity?: number; 
};

const Loading: React.FC<Props> = ({ color = "gray", opacity = 0.8 }) => {
  return (
    <div className="flex space-x-2">
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className="w-3 h-3 rounded-full animate-bounce"
          style={{
            backgroundColor: color,
            opacity: opacity,
            animationDelay: `${index * 0.2}s`,
          }}
        ></span>
      ))}
    </div>
  );
};

export default Loading;
