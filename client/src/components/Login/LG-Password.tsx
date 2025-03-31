import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React from "react";
import Loading from "../commons/Loading";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [value, setValue] = React.useState("");  
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  function handleChange(newValue: string) {
    setValue(newValue);
    
    if (newValue.length === 4) {
      setLoading(true);
      setError("");

      setTimeout(() => {   
        setLoading(false);
        
        if (newValue === "2418") {
          console.log("Correct Passcode");
          navigate("/");
        } else {
          setError("Wrong Passcode");
        }
      }, 2000);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <InputOTP maxLength={4} value={value} onChange={handleChange}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>

      <div className="h-5 flex justify-center items-center">
        {loading ? <Loading opacity={0.5} /> : <span className="text-red-400 text-sm">{error}</span>}
      </div>
    </div>
  );
};

export default Password;
