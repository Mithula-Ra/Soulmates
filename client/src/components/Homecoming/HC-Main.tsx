import React, { useState } from "react";
import SelectUser from "./HC-SelectUser";
import Day from "./HC-Day";
import Flowers from "./Flowers";

type User = {
  id: number;
  name: string;
  profilePic: string
};

const users: User[] = [
  { id: 1, name: "Mithula", profilePic: "Mithula-HC.JPG"},
  { id: 2, name: "Rania", profilePic: "Rania-HC.JPG"}
];

const Main: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  // const [error, setError] = useState<string>("");

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    // setError(""); // Ensure setError is defined
  };

  return (
    <div>
      {!selectedUser ? (
        <div className="flex flex-col gap-4">
          <Day />
          <SelectUser users={users} handleUserSelect={handleUserSelect} />
          <Flowers></Flowers>
        </div>
      ) : (
        <div className="h-full w-full">
          <h2>Hello, {selectedUser.name}!</h2>
        </div>
        
      )}
    </div>
  );
};

export default Main;
