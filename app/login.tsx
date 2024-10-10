import React from "react";

function login() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="pt-8 h-[560px] w-[550px] bg-white shadow border-2 border-[#cacaca] rounded-xl">
        <form action="">
          <h1 className="flex justify-center text-3xl text-black font-semibold">
            Login to continue
          </h1>
          <p className="flex justify-center text-center pt-2">
            Tell us about yourself! We need your details to make <br />
            your experience great.
          </p>
          <div className="p-10 space-y-4 ">
            <h3 className="text-lg font-medium">Email</h3>
            <input
              className="flex justify-center items-center  border-2 border-[#cacaca] h-[50px] w-[470px] rounded-[3px] mx-auto p-3"
              type="email"
              placeholder="Enter your Email"
            />
            <h3 className="text-lg font-medium">Password</h3>
            <input
              className="flex justify-center items-center  border-2 border-[#cacaca] h-[50px] w-[470px] rounded-[3px] mx-auto p-3"
              type="password"
              placeholder="Enter your Password"
            />
            <button className="h-[50px] w-[470px] bg-black text-white rounded-[3px] mx-auto">Login</button>

            <div className=""> 
              <span>don't have an account ? <a href="https://www.youtube.com/" className="text-[#0085FF]">register</a></span>
              <a href="" className="text-[#0085FF] ml-[107px]">Forgot Password.</a>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
