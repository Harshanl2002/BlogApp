import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbMessageCircle2Filled } from "react-icons/tb";
import svg from "../assets/register.svg"
const Login = () => {
  const [userdata,setuserdata]=useState({
    email:'',
    password:'',
  });
  const changeInputHandeler=(e)=>{
    setuserdata(prevState=>{
      return {...prevState,[e.target.name]:e.target.value}
    })
  }

  return (
    <div className="min-h-[100vh] lg:flex justify-around bg-slate-100">
      
      <div className="min-w-[60vw] min-h-full  flex flex-col  items-center py-10 font-Roboto">
          <h1 className="text-[40px] font-bold font-poppins mb-10">Sign In</h1>
          <form  className="min-w-[90%] ms-[5%] me-[5%] max-w-[90%]  flex flex-col items-center py-10">
            <p className="min-w-[90%] text-center bg-red-300 my-2 text-[#1e1e1e] text-[16px] rounded-sm p-2">{"This is an Error message"}</p>
            <input type="text" placeholder="Email" name='email' value={userdata.email} onChange={changeInputHandeler} className="min-w-[90%] border border-[#929292] p-1 focus:outline-none mb-2 rounded-sm" />
            <input type="password" placeholder="Password" name='password' value={userdata.password} onChange={changeInputHandeler} className="min-w-[90%] border border-[#929292] p-1 focus:outline-none mb-2 rounded-sm" />
            <button type='submit' className="p-2 btn btn-sm btn-primary mt-2">Login</button>
          </form>
          <small>Dont have an accoount?<Link to={"/Register"} className="text-primary font-bold">Create Account</Link></small>
      </div>
      <div className="lg:min-w-[40vw] lg:min-h-full max-lg:min-h-[60vh]  flex justify-between items-center flex-col shadow-xl bg text-white lg:p-10 loginanimation">
        <div>
        <Link to={"/"}>
          <div className="text-white text-[40px] font-logo font-bold flex justify-center ">.bl<span className="text-white flex items-center"><TbMessageCircle2Filled/></span>g</div>
        </Link>
        </div>
        <div>
          <img src={svg} className="w-[60vh]"/>
        </div>
        <div>
          <h1 className="text-[40px] font-bold font-poppins mb-10">Sign In</h1>
        </div>    
      </div>
    </div>
  )
}

export default Login;