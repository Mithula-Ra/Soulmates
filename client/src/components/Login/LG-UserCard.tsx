  
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
        <div className="animate-fadeIn ">
            <Card className={`animate-float hover:backdrop-blur-3xl hover:shadow-lg ${user.id === 0 ? 'hover:shadow-blue-500/20' : 'hover:shadow-pink-500/20'}`}>
              <div className="flex flex-col items-center p-2 font-Cute">
                <img
                    src={`/Profile/${user.id}.png`}
                    alt={user.initials}
                    className="w-32 h-32 rounded-full object-cover m-2"
                />
                <h3 className="text-xl font-semibold">{user.name}</h3>
            </div>
                  </Card>
        </div>
    );
  };
  
  export default UserCard;
  