type User = {
    id: number;
    name: string;
    profilePic: string;
    password: string;
  };
  
  type Props = {
    users: User[]; // Array of users passed as prop
    handleUserSelect: (user: User) => void; // Function to handle user selection passed as prop
  };
  
  const SelectUser: React.FC<Props> = ({ users, handleUserSelect }) => {
    return (
      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => handleUserSelect(user)} // Calls the function passed as prop
            className="bg-blue-500 text-white p-2 rounded"
          >
            {user.name} {/* Displays user name */}
          </button>
        ))}
      </div>
    );
  };
  
  export default SelectUser;
  