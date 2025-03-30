import UserCard from "./HC-UserCard";

type User = {
    id: number;
    name: string;
    profilePic: string;
  };
  
  type Props = {
    users: User[]; // Array of users passed as prop
    handleUserSelect: (user: User) => void; // Function to handle user selection passed as prop
  };
  
  const SelectUser: React.FC<Props> = ({ users, handleUserSelect }) => {
    return (
      <div className="flex flex-row items-center justify-center gap-4 pb-8">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => handleUserSelect(user)} // Calls the function passed as prop
            className="rounded">
                <UserCard user={user}/>
          </button>
        ))}
      </div>
    );
  };
  
  export default SelectUser;
  