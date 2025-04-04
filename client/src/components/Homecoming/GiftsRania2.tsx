import { Link } from "react-router-dom";
import Message from "./Message";
import { Button } from "../ui/button";


const GiftsRania2 = () => {

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center p-6 md:p-10">
      {/* Background Image */}
      <img 
        src="/Homecoming/mirror.webp" 
        alt="Gifts for you" 
        className="absolute inset-0 w-full h-full object-cover z-10 animate-fadeIn"
      />
       <img 
        src="/Homecoming/re.webp" 
        alt="Gifts for you" 
        className="absolute opacity-0 inset-0 w-full h-full object-cover z-20 animate-fadeOut delay-200"
      />
      
      {/* Foreground Content */}
      <div className="relative z-30 text-white text-xl h-screen flex items-center justify-center">
      
  
  <div
    className="absolute opacity-0 animate-fadeInandOut"
    style={{ animationDuration: "8s", animationDelay: "12s" }}
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
    style={{ animationDuration: "8s", animationDelay: "21s" }}
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
    style={{ animationDuration: "8s", animationDelay: "30s" }}
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
    style={{ animationDuration: "8s", animationDelay: "39s" }}
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
    style={{ animationDuration: "8s", animationDelay: "48s" }}
  >
    <Message title="Because of you Rania.." userID={1}>
      <div className="flex flex-col text-lg gap-3">
        <span>It's All Because of you Rania..🥺💕💕...</span>
        <span>You are My Happiness 🥺🥺💖💖</span>
      </div>
    </Message>
  </div>


<div
    className="absolute opacity-0 animate-fadeInandOut"
    style={{ animationDuration: "8s", animationDelay: "57s" }}
  >
    <Message title="My Happiness.." userID={1}>
      <div className="flex flex-col text-lg gap-3">
        <span>You are My Happiness Baby🥺🥺💖💖</span>
        <span>My Future 💘</span>
      </div>
    </Message>

    </div>

    <div
    className="absolute opacity-0 animate-fadeInandOut"
    style={{ animationDuration: "8s", animationDelay: "66s" }}
  >
    <Message title="So baby.." userID={1}>
      <div className="flex flex-col text-lg gap-3">
        <span>So Baby 🥺💖</span>
        <span>Will you stay by my side until infinity?..</span>
      </div>
    </Message>
    </div>

    <div
    className="absolute opacity-0 animate-fadeInandOut"
    style={{ animationDuration: "8s", animationDelay: "75s" }}
  >
    <Message title="So baby.." userID={1}>
      <div className="flex flex-col text-lg gap-3">
        <span>Will you be mine Rania?..</span>        
        <span>And mine alone 💞?..</span>
      </div>
    </Message>
    </div>

    <div
    className="absolute opacity-0 animate-fadeInandOut"
    style={{ animationDuration: "7s", animationDelay: "84s" }}
  >
    <Message title="will you.." userID={1}>
      <div className="flex flex-col text-lg gap-3">
        <span>Will you be My wife Rania 💓?..</span> 
      </div>
    </Message>
    </div>
   

    <div
    className="absolute opacity-0 animate-fadeIn"
    style={{ animationDuration: "20s", animationDelay: "92s" }}
  >
      <Button >
      <Link  className="z-50 w-full bg-purple-300 rounded-lg" to={"/"}><Button>I Do 🥺💓</Button></Link>
      </Button>      
    </div>
    
  </div>
 

    </div>
  );
};

export default GiftsRania2;
