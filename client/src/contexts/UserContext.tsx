import { createContext, useState, ReactNode, useContext } from "react";

interface User {
  id: number;
  name: string;
}

interface UserContextType {
  user: User | null;
  users: User[];
  setUser: (newUser: User | null) => void;
  switchUser: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

// Predefined Users
const users: User[] = [
  { id: 0, name: "Mithula" },
  { id: 1, name: "Rania" },
];

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const switchUser = () => {
    if (user) {
      const nextUser = users.find((u) => u.id !== user.id) || users[0];
      setUser(nextUser);
    }
  };

  return (
    <UserContext.Provider value={{ user, users, setUser, switchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context
}