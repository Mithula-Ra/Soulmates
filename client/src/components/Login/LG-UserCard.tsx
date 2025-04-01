  
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
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
        <div className="animate-fadeIn">
            <Card className={`animate-float hover:backdrop-blur-3xl hover:shadow-lg ${user.id === 0 ? 'hover:shadow-blue-500/20' : 'hover:shadow-pink-500/20'}`}>
              <div className="flex flex-col items-center p-2 font-Cute">
              <Avatar className="w-32 h-32">
                <AvatarImage src={`/Profile/${user.id}.webp`} />
                <AvatarFallback>{user? user.initials : "MR"}</AvatarFallback>
              </Avatar>
                <h3 className="text-xl font-semibold mt-1">{user.name}</h3>
            </div>
                  </Card>
        </div>
    );
  };
  
  export default UserCard;
  