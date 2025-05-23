  
import { Card } from "../ui/card";

type User = {
  id: number;
  name: string;  
  secondName: string;
  initials: string;
  };
  
  interface UserProps {
    user: User;  
  }

  
  const UserCard: React.FC<UserProps> = ({ user }) => {

    return (
        <Card className={`animate-fadeIn hover:backdrop-blur-3xl hover:shadow-lg ${user.id === 1 ? 'hover:shadow-blue-500/20' : 'hover:shadow-pink-500/20'}`}>
          <div className="flex flex-col items-center p-2 font-Cute">
            <img 
                src={`/Homecoming/${user.id}.webp`}
                alt={user.name} 
                className="w-32 h-32 rounded-full object-cover mb-4 animate-float" 
            />
            <h3 className="text-xl font-semibold">{user.name}</h3>
        </div>
      </Card>
    );
  };
  
  export default UserCard;
  