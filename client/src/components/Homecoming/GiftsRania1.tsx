import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import { Button } from "../ui/button";
  import { useEffect, useState } from "react";
import Flowers from "./Flowers";
import { useNavigate } from "react-router-dom";
  
  const GiftsRania1 = () => {
    const [firstGiftClaimed ,setFrstGiftClaimed] = useState(false);
    const [secondGiftClaimed, setSecondGiftClaimed] = useState(false);
    const [thirdGiftClaimed, setThirdGiftClaimed] = useState(false);
    const navigate = useNavigate();

    const handleClaim = (setClaim: React.Dispatch<React.SetStateAction<boolean>>) => {
        setClaim(true);        
    };

    useEffect(() => {
        if (firstGiftClaimed && secondGiftClaimed && thirdGiftClaimed) {
            navigate("/gifts/mirror");
        }
    }, [firstGiftClaimed, secondGiftClaimed, thirdGiftClaimed]); // Runs when any of these values change
    

    return (
      <div className="relative flex h-screen w-screen flex-col items-center justify-center p-6 md:p-10">
        {/* Background Image */}
        <img
          src="/Homecoming/Gift-bg.webp"
          alt="Gifts for you"
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* Foreground Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-end">
          {/* First Gift */}
          <AlertDialog>
            <AlertDialogTrigger>
              <Gift top={50} left={20} claimed={firstGiftClaimed} id={1} />
            </AlertDialogTrigger>
            <AlertDialogContent className="min-h-[450px]  max-w-[300px] bg-transparent border-none">
              <AlertDialogHeader>
                <AlertDialogTitle className="mb-6 text-white/80 text-sm ">
                  You Look soooo Beautiful in white Rania 🤍
                </AlertDialogTitle>
              </AlertDialogHeader>
              <div className="max-w-[300px] h-fit animate-float">
                <img src="/Homecoming/g1.webp" alt="Gift for my love" className="object-cover w-full rounded-lg h-fit "/>
                <Flowers></Flowers>
                
              </div>
              <AlertDialogFooter className="mt-6">
                <AlertDialogAction>
                  <Button onClick={() => handleClaim(setFrstGiftClaimed)} variant={"ghost"} className="w-full h-full z-50 font-semibold"> {secondGiftClaimed && thirdGiftClaimed ? 'See in mirror 😍' : 'Wear it 😍'}</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
  
          {/* Second Gift */}
          <AlertDialog>
            <AlertDialogTrigger>
              <Gift top={230} left={140} claimed={secondGiftClaimed} id={2} />
            </AlertDialogTrigger>
            <AlertDialogContent className="min-h-[450px]  max-w-[300px] bg-transparent border-none">
              <AlertDialogHeader>
                <AlertDialogTitle className="mb-6  text-white/80 text-sm">
                There’s no flower in this world that doesn’t call you their Queen Baby 🥰</AlertDialogTitle>
              </AlertDialogHeader>
              <div className="max-w-[300px] h-fit animate-float">
                <img src="/Homecoming/g2.webp" alt="Gift for my love" className="object-cover w-full rounded-lg h-fit "/>
                <Flowers></Flowers>
                
              </div>
              <AlertDialogFooter className="mt-6">
                <AlertDialogAction>
                <Button onClick={() => handleClaim(setSecondGiftClaimed)} variant={"ghost"} className="w-full h-full z-50 font-semibold">{firstGiftClaimed && thirdGiftClaimed ? 'See in mirror 😍' : 'Wear it 😍'}</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
  
          {/* Third Gift */}
          <AlertDialog>
            <AlertDialogTrigger>
              <Gift top={360} left={30} claimed={thirdGiftClaimed} id={3}/>
            </AlertDialogTrigger>
            <AlertDialogContent className="min-h-[450px] max-w-[300px] bg-transparent border-none">
              <AlertDialogHeader>
                <AlertDialogTitle className="mb-6 text-white/80 text-sm">
                And you're my queen more than anything love 🥺❤️
                </AlertDialogTitle>
              </AlertDialogHeader>
              <div className="max-w-[300px] h-fit animate-float">
                <img src="/Homecoming/g3.webp" alt="Gift for my love" className="object-cover w-full rounded-lg h-fit "/>
                <Flowers></Flowers>
                
              </div>
              <AlertDialogFooter className="mt-6">
                <AlertDialogAction>
                <Button onClick={() => handleClaim(setThirdGiftClaimed)} variant={"ghost"} className="w-full h-full z-50 font-semibold">{secondGiftClaimed && firstGiftClaimed ? 'See in mirror 😍' : 'Wear it 😍'} </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <div className="w-full flex flex-col gap-4 justify-start mb-16 items-center">
            <span className="max-w-[260px] font-semibold text-white">Are you ready Baby? 🥰</span>
            <span className="max-w-[260px] font-semibold text-purple-500 text-sm">You can click and see your gifts now 😍</span>
         </div>
        </div>
      </div>
    );
  };
  
  export default GiftsRania1;
  
  interface GiftProps {
    top: number;
    left: number;
    claimed: boolean;
    id: number;
  }
  
  interface GiftProps {
    top: number;
    left: number;
    claimed: boolean;
    id: number;
  }
  
  const Gift: React.FC<GiftProps> = ({ top, left, claimed, id }) => {
    return (
      <div
        className="absolute w-[180px] h-[180px] animate-float2"
        style={{ top: `${top}px`, left: `${left}px` }}
      >
        {/* Default Gift Image */}
        <img
          src="/Homecoming/Gift-box.webp"
          alt={`Gift ${id}`}
          className="w-full h-full object-cover rounded-lg"
        />
  
        {/* If Gift is claimed, show the claimed image */}
        {claimed && (
          <div className="absolute top-0 left-0 w-[150px] h-full z-50 opacity-90">
            <img
              src={`/Homecoming/g${id}.webp`} // Dynamically select claimed gift image
              alt={`Claimed Gift ${id}`}
              className="w-[150px] h-full object-cover rounded-lg"
            />
          </div>
        )}
  
        {/* Star Animations */}
        <ul className="relative">
          <li className="absolute w-[3px] h-[3px] rounded-full bg-white top-[38px] left-[65%] animate-star2 delay-100"></li>
          <li className="absolute w-[3px] h-[3px] rounded-full bg-white top-[45px] left-[53%] opacity-75 animate-star2 delay-300"></li>
          <li className="absolute opacity-0 w-[2px] h-[2px] rounded-full bg-white rotate-45 top-[12px] left-[35%] animate-star1 delay-500"></li>
          <li className="absolute w-[3px] h-[3px] rounded-full bg-white rotate-45 top-[10px] opacity-90 left-[50%] animate-star1 delay-700"></li>
          <li className="absolute opacity-0 w-[4px] h-[4px] rounded-full bg-white rotate-45 top-[30px] left-[55%] animate-star1"></li>
        </ul>
      </div>
    );
  };



