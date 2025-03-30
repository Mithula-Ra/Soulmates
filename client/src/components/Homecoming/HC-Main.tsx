import React, { useState } from "react";
import SelectUser from "./HC-SelectUser";
import Day from "./HC-Day";

type User = {
  id: number;
  name: string;
  profilePic: string;
  password: string;
};

const users: User[] = [
  { id: 1, name: "User One", profilePic: "user1.jpg", password: "password1" },
  { id: 2, name: "User Two", profilePic: "user2.jpg", password: "password2" }
];

const Main: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setError(""); // Ensure setError is defined
  };

  return (
    <div>
      {!selectedUser ? (
        <div className="flex flex-col gap-4">
          <Day />
          <SelectUser />
        </div>
      ) : (
        <div>
          
        </div>
      )}
    </div>
  );
};

export default Main;
