interface FlowersProps {
    emoji?: string; // Allows custom emoji (default: ❤️)
    imageSrc?: string; // Allows custom image instead of emoji
  }
  
  const Flowers: React.FC<FlowersProps> = ({ emoji = "❤️", imageSrc }) => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <ul className="relative h-full w-full list-none">
          {Array.from({ length: 100 }).map((_, index) => (
            <li
              key={index}
              className={`absolute opacity-0 animate-falling ${
                index % 2 == 0 ? "text-red-500 text-xl" : "w-[8px] h-[8px] bg-pink-500 rounded-full"
              }`}
              style={{
                top: "-10%", // Start above the screen
                left: `${Math.random() * 90}%`, // Random horizontal start
                animationDuration: `${Math.random() * 3 + 2}s`, // Random fall speed (2s to 6s)
                animationDelay: `${index * 100}ms`, // Fixing the delay issue
              }}
            >
              {index % 2 == 0 ? (
                imageSrc ? (
                  <img src={imageSrc} alt="❤️" className="w-12 h-12 text-xl" />
                ) : (
                  emoji
                )
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Flowers;
  