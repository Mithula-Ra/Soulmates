import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React from "react";
import Loading from "../commons/Loading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Password = () => {
  const [value, setValue] = React.useState("");  
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");  
  const navigate = useNavigate();

  // Handling OTP input change
  const handleChange = async (newValue: string) => {
    setValue(newValue);

    if (newValue.length < 4) {
      setError("");
    }

    if (newValue.length === 4) {
      setLoading(true);
      setError(""); 

      try {
        const response = await axios.post("https://soulmates-d20s.onrender.com/user/login", {
            password: newValue,
        });

        localStorage.setItem('authToken', response.data.token); // Store JWT token
        console.log("Login successful:", response.data);
        setError(''); 

        const storedUser = localStorage.getItem("selectedUser");
        if (storedUser) {
            navigate("/");  // Navigate to the home page if user is logged in
        } else {
            navigate("/login/user");  // Navigate to the login page if no user
        }
      } catch (err: any) {
        setError("Wrong Passcode");
        console.error("Error during login:", err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);  // Set loading state to false after API call
      }
    }
  };

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
