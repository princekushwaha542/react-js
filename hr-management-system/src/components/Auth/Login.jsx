import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";

const Login = ({handelLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault();
    handelLogin(email , password);
    setEmail('')
    setPassword('')
  }
  return (
    <form onSubmit={(e)=>{
      submitHandler(e);
    }} >
    <div className="min-h-screen bg-[#f3e9e9] flex items-center justify-center px-4">
            <h2 style={{ fontFamily: "Poppins" }} className="text-indigo-600  absolute text-2xl top-8 center font-bold text-center mb-4">WorkForce Hub</h2>
      
      <div className="flex items-center gap-16">
        
        <div className="w-[450px]">
          
          <div className="bg-white border border-gray-300 px-10 py-2 pt-12 rounded-2xl">
          <h3 className="text-xl text-slate-400 font-bold text-center mb-8">Log in your account</h3>

            {/* Email */}
            <div className="mb-8">
              <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-4 py-3">
                <Mail className="text-gray-400 mr-3" size={18} />

                <input
                value={email}
                onChange={(e)=>{
                 setEmail(e.target.value)
                }}
                  type="email"
                  placeholder="Phone number, username, or email"
                  className="w-full bg-transparent outline-none  text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-5">
              <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-4 py-3">
                <Lock className="text-gray-400 mr-3" size={18} />

                <input
                value={password}
                onChange={(e) =>{
                  setPassword(e.target.value)
                }}
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            {/* Login Button */}
            <button className="w-full bg-[#0095f6] hover:bg-[#1877f2] text-white font-semibold py-3 rounded-lg transition">
              Log in
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <span className="text-gray-500 text-sm font-medium">OR</span>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            {/* Forgot */}
            <p className="text-center text-sm text-[#385185] cursor-pointer hover:text-[#f97864]  font-semibold ">
              Forgot password?
            </p>
          </div>

          {/* Signup Card */}
          <div className="bg-white border border-gray-300 mt-4 py-6 rounded-2xl text-center">
            <p className="text-sm ">
              Don’t have an account?{" "}
              <span className="text-[#0095f6] font-semibold cursor-pointer">
                Sign up
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
    </form>
  );
};

export default Login;