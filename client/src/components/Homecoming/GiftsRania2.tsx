import { Link } from "react-router-dom";
import Message from "./Message";
import { Button } from "../ui/button";

const GiftsRania2 = () => {

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center p-6 md:p-10">
      {/* Background Image */}
      <img 
        src="/Homecoming/Gift-bg.webp" 
        alt="Gifts for you" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Foreground Content */}
      <div className="relative z-10 text-white text-xl h-screen flex items-center justify-center">
      <Link className="z-50" to={"/"}><Button>Look</Button></Link>
  <div
    className="absolute opacity-0 animate-fadeInandOut"
    style={{ animationDuration: "8s", animationDelay: "1s" }}
  >
    <Message title="Raniaa 😍😍" userID={1}>
      <div className="flex flex-col text-lg gap-3">
      <span>Ohh sweetheart 😍😍</span>
        <span>Oh my god, you look the most beautiful today 😍😍</span>
      </div>
    </Message>
  </div>

  <div
    className="absolute opacity-0 animate-fadeInandOut"
    style={{ animationDuration: "8s", animationDelay: "10s" }}
  >
    <Message title="Look at you ah💕💕" userID={1}>
      <div className="flex flex-col text-lg gap-3">
      <span>Look at you ah💕💕</span>
        <span className="font-semibold">My Bride🥰</span>
      </div>
    </Message>
  </div>

  <div
    className="absolute opacity-0 animate-fadeInandOut"
    style={{ animationDuration: "8s", animationDelay: "19s" }}
  >
    <Message title="Soo Pretty 💕🥺" userID={1}>
      <div className="flex flex-col text-lg gap-3">
        <span>Soo Pretty 💕🥺</span>
        <span>Just like the Day I first saw you baby💕,</span>
        <span>My tears will tell you how beautiful you are ah💕💕🥺</span>
      </div>
    </Message>
  </div>

  <div
    className="absolute opacity-0 animate-fadeInandOut"
    style={{ animationDuration: "8s", animationDelay: "28s" }}
  >
    <Message title="You know🥺💕💕.." userID={1}>
      <div className="flex flex-col text-lg gap-3">
        <span>You know🥺💕💕...</span>
        <span>I am the happiest man to ever live in this world 🥺🥺💖💖</span>
      </div>
    </Message>
  </div>

  <div
    className="absolute opacity-0 animate-fadeInandOut"
    style={{ animationDuration: "8s", animationDelay: "37s" }}
  >
    <Message title="Because of you Rania.." userID={1}>
      <div className="flex flex-col text-lg gap-3">
        <span>It's All Because of you Rania..🥺💕💕...</span>
        <span>You are My Happiness 🥺🥺💖💖</span>
      </div>
    </Message>
  </div>
</div>

<div
    className="absolute opacity-0 animate-fadeInandOut"
    style={{ animationDuration: "8s", animationDelay: "46s" }}
  >
    <Message title="My Happiness.." userID={1}>
      <div className="flex flex-col text-lg gap-3">
        <span>You are My Happiness Baby🥺🥺💖💖</span>
        <span>My Future 💘</span>
      </div>
    </Message>
    
    
  </div>
 

    </div>
  );
};

export default GiftsRania2;
