import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React from "react";
import Loading from "../commons/Loading";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext"


const Password = () => {
  const [value, setValue] = React.useState("");  
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");  
  const { user } = useUser();
  const navigate = useNavigate();

  function handleChange(newValue: string) {
    setValue(newValue);

    if (newValue.length < 4) {
      setError("");
    }
    
    if (newValue.length === 4) {
      setLoading(true);
      setError("");

      setTimeout(() => {   
        setLoading(false);
        
        if (newValue === "2418") {
          console.log("Correct Passcode");
          if (user) {
            navigate("/");
          } else {
            navigate("/login/user");
          }
        } else {
          setError("Wrong Passcode");
        }
      }, 2000);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="backdrop-blur-lg border-[2px] dark:border-[1px] p-1 rounded-lg border-pink-200 dark:border-gray-200 dark:border-opacity-50">
        <InputOTP maxLength={4} value={value} onChange={handleChange}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="h-5 flex justify-center items-center">
        {loading ? <Loading opacity={0.7} /> : <span className="text-red-400 text-opacity-80 text-sm animate-shake">{error}</span>}
      </div>
    </div>
  );
};

export default Password;
