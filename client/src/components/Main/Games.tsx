import Hero from "./Hero";
import GameCard from "./GM-GameCard";



const Games = () => {
    return (
      <div className="min-h-screen w-full flex flex-col mt-6 p-1">
        <Hero url="/SideBar/home.webp" title="Games" subTitle="This is the games tab"></Hero>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
             {testGames.map((game) => (
             <GameCard key={game.id} Game={game} />
  ))}
</div>

      </div>
    );
  }
  
  export default Games;

  type Game = {
    id: string;
    name: string;
    num: number;
    img: string;
    done?: number
  };

  const testGames: Game[] = [
    {
      id: "Cyber-Quest" ,
      name: "Cyber Quest",
      num: 3,
      img: "https://example.com/images/cyber-quest.jpg",
      done: 45
    }
    // },
    // {
    //   id: 2,
    //   name: "Shadow Wars",
    //   num: "Battle in the dark realm against mystical creatures.",
    //   url: "https://example.com/shadow-wars",
    //   img: "https://example.com/images/shadow-wars.jpg",
    // },
    // {
    //   id: 3,
    //   name: "Pixel Racer",
    //   Dsc: "Retro-style racing game with fast-paced action.",
    //   url: "https://example.com/pixel-racer",
    //   img: "https://example.com/images/pixel-racer.jpg",
    // },
    // {
    //   id: 4,
    //   name: "Mystic Puzzles",
    //   Dsc: "Solve ancient mysteries through challenging puzzles.",
    //   url: "https://example.com/mystic-puzzles",
    //   img: "https://example.com/images/mystic-puzzles.jpg",
    // },
    // {
    //   id: 5,
    //   name: "Sky Warriors",
    //   Dsc: "Engage in epic aerial battles in this sky combat game.",
    //   url: "https://example.com/sky-warriors",
    //   img: "https://example.com/images/sky-warriors.jpg",
    // },
  ];
  
  
  