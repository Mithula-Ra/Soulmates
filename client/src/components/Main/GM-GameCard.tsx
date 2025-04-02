import { Link } from "react-router-dom";
import { Card } from "../ui/card";

type Game = {
    id: string;
    name: string;
    num: number;
    img: string;
    done?: number;
  };
  
  interface UserProps {
    Game: Game;  
  }

  
  const GameCard: React.FC<UserProps> = ({ Game }) => {

    return (
            <Link to={`/games/${Game.id}`}>
              <Card className={`min-w-[120px] min-h-[100px] hover:backdrop-blur-3xl hover:shadow-lg backdrop-blur-lg shadow-lg shadow-gray-600/30`}>
              <div className="w-full h-full flex flex-col justify-start">
                <div className="relative">
                  <img src="/SideBar/home.webp" alt="games" className="rounded-t-xl h-[50%] w-full object-cover" />
                </div>
                <div className="w-full flex-col justify-start items-start p-2">
                  <div className="text-base font-light text-left mb-4">{Game.name}</div>
                  <div className="text-lg flex flex-row items-center justify-end gap-4 font-light">
                  {/* <div className="text-lg flex flex-row items-center justify-end gap-2 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-all" viewBox="0 0 16 16">
                        <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"/>
                      </svg>
                      <span>{`${Game.done}%`}</span>
                    </div> */}
                    
                    <div className="text-sm md:text-lg flex flex-row items-center justify-end gap-2 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16">
                        <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
                      </svg>
                      <span>{Game.num}</span>
                    </div>
                  </div>
                </div>
              </div>
              </Card>
            </Link>
    );
  };
  
  export default GameCard;
  