import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import GameCard from "./GM-GameCard";
import { Skeleton } from "../ui/skeleton";

type Game = {
  id: string;
  name: string;
  num: number;
  img: string;
  done?: number;
};

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGames = async () => {
    setLoading(true); 
    setError(null);   
    try {
      const response = await axios.get("https://soulmates-d20s.onrender.com/games/all");
      setGames(response.data); 
    } catch (err) {
      setError("Failed to load games.");
    } finally {
      setLoading(false)
    }
  };


  useEffect(() => {
    fetchGames();
  }, []);

  const handleRefresh = () => {
    fetchGames(); // Retry fetching the data
  };

  // **Show Skeleton Loader While Loading**
  if (loading) {
    return (
      <div className="min-h-screen w-full flex flex-col mt-6 p-1">
        <Hero url="/SideBar/games.webp" title="Games" subTitle="This is the games tab" />

        {/* Skeleton grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <Skeleton className="min-w-[120px] min-h-[100px] rounded-xl" />
              <Skeleton className="h-4 w-3/4 rounded-md" />
              <Skeleton className="h-4 w-1/2 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // **Show Error Message if Fetch Fails**
  if (error) {
    return (
      <div className="min-h-screen w-full flex flex-col mt-6 p-1">
        <Hero url="/SideBar/games.webp" title="Games" subTitle="This is the games tab" />

        <div className="text-center mt-4">
          <p className="text-red-500">{error}</p>
          <button
            onClick={handleRefresh}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // **Render Games List**
  return (
    <div className="min-h-screen w-full flex flex-col mt-6 p-1">
      <Hero url="/SideBar/games.webp" title="Games" subTitle="This is the games tab" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {games.map((game) => (
          <GameCard key={game.id} Game={game} />
        ))}
      </div>
    </div>
  );
};

export default Games;
