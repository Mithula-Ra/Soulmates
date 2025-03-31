import { useUser } from "@/contexts/UserContext";
import SelectUser from "./LG-SelectUser";

const ChooseUser = () => {
  const { users } = useUser()

  return (
    <div className="flex flex-col min-w-[300px] min-h-[50px] items-center gap-6 p-6 rounded-2xl shadow-lg bg-white dark:bg-black">
      <div className="text-gray-700 dark:text-gray-300 text-center font-light text-2xl mb-4">
        <span>Continue as..</span>
      </div>
      <SelectUser />
    </div>
  );
};

export default ChooseUser;
