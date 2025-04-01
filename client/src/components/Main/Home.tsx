import Hero from "./Hero";
import Couple from "./HM-Couple";

const Home = () => {
    return (
      <div className="min-h-screen w-full flex flex-col mt-6 p-1">
        <Hero url="/SideBar/home.webp" title="Home" subTitle="This is the Home"></Hero>
        <div className="flex flex-row gap-4 my-4 h-fit">
            <Couple></Couple>
        </div>
        
      </div>
    );
  }
  
  export default Home;
  