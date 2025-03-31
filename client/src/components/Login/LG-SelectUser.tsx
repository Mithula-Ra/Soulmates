import { useUser } from "@/contexts/UserContext";
import UserCard from "./LG-UserCard";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useState } from "react";


const SelectUser = () => {
  const { users, setUser } = useUser();
  const navigate = useNavigate();
  const [saveChoice, setSaveChoice] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("selectedUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      navigate("/"); // Redirect if a user was already saved
    }
  }, [setUser, navigate]);

  const handleUserSelect = (user: { id: number; name: string }) => {
    setUser(user);

    if (saveChoice) {
      localStorage.setItem("selectedUser", JSON.stringify(user)); // Save user if checkbox is checked
    }

    if(user){
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-4 pb-8">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => handleUserSelect(user)} // Pass the selected user here
            className="rounded"
          >
            <UserCard user={user} />
          </button>
        ))}
        <div>
        </div>
      </div>
      <div className="items-top flex space-x-2 px-2">
      <Checkbox
          id="saveChoice"
          checked={saveChoice}
          onCheckedChange={(checked) => setSaveChoice(checked as boolean)}
        />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Save Choice
            </label>
          </div>
        </div>
    </div>
  );
};

export default SelectUser;
