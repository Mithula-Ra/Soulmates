import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Couple from "./HM-Couple";

const Home = () => {
    return (
      <div className="min-h-screen w-full flex flex-col mt-6 p-1">
        <Hero url="/SideBar/home.webp" title="Home" subTitle="This is the Home"></Hero>
        <div className="flex flex-row gap-4 my-4 h-fit">
            <Couple></Couple>
            
        </div>
        <NavLink 
                    to={"/homecoming"}
                    className="
                        w-full flex flex-col items-center gap-0 drop-shadow-md rounded-lg my-2 opacity-80 p-0 
                            bg-purple-700 text-white font-semibold dark:bg-gray-500 bg-muted hover:text-white hover:bg-purple-400 dark:hover:bg-muted
                        "
                >
                    <img 
                        src={`SideBar/homecoming.webp`} 
                        className="w-full h-36 object-cover rounded-t-lg" 
                    />
                    <div className="w-full px-4 pt-1 pb-2 rounded-b-lg transition duration-200">
                        Go see Homecoming 💓
                    </div>
                </NavLink>
      </div>
    );
  }
  
  export default Home;
  