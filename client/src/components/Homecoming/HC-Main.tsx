import { useNavigate } from "react-router-dom";
import SelectUser from "./HC-SelectUser";
import Day from "./HC-Day";
import Flowers from "./Flowers";
import { useUser } from "@/contexts/UserContext";

type  User = {
  id: number;
  name: string;  
  secondName: string;
  initials: string;
};


const Main: React.FC = () => {
  const { users, setUser } = useUser();
  const navigate = useNavigate();


  const handleUserSelect = (user: User) => {
    setUser(user);
    navigate("/gifts")
  };

  return (
    <div>
        <div className="flex flex-col gap-4">
          <Day />
          <SelectUser users={users} handleUserSelect={handleUserSelect} />
          <Flowers imageSrc="/Homecoming/rose.webp"></Flowers>
        </div>  
    </div>
  );
};

export default Main;
