import React,{useContext,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import usermale from "../assets/user-male-circle.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { ImCircleLeft } from "react-icons/im";
import { UserContext } from '../context/user.context';
import axios from 'axios';
import { BaseURI,BaseURIAPI } from '../const.URI';
import { Avatarcontext } from '../context/Avathar.context';


const Header = () => {

  const {currentUser}=useContext(UserContext);
  const {currentAvathar,SetcurrentAvathar}=useContext(Avatarcontext);
  const [avatars,setAvatar]=useState(currentAvathar===null?usermale:currentAvathar.avatarURL);
  useEffect( ()=>{
    if (currentUser&&!(avatars===currentAvathar.avatarURL)) {
      getavathar()
    }},[currentAvathar])
  const getavathar=async()=>{
      try {
        const myHeaders = {
          'Content-Type': "text/json",
          'Authorization': `Bearer ${currentUser.token}`, // Add any other headers as needed
        };
        const response=await axios.get(`${BaseURIAPI}/user/byID/?:id=${currentUser.id}`,{headers:myHeaders});
        const val=response.data;
        console.log(BaseURI+"/assets/uploads/"+val.avatar)
        setAvatar(BaseURI+"/assets/uploads/"+val.avatar);
        SetcurrentAvathar({avatarURL:BaseURI+"/assets/uploads/"+val.avatar})
      } catch (error) {
        console.log(error);
      }
  }
  return (
   <div className="navbar font-poppins static top-0 z-1 backdrop-blur-xl bg-white/30">
    <div className="max-lg:navbar-start lg:hidden">
    <div className="drawer">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
        <GiHamburgerMenu/>
      </label>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-[100vh] bg-base-200 text-base-content">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button w-[60%] rounded-badge my-5">
          <ImCircleLeft/>Close</label>
          <li className="border-primary border-b-2"><Link to={"/"}>{"Home"}</Link></li>
          {currentUser!==null&&<li className="border-primary border-b-2"><Link to={"/Dashboard"}>{"Dashboard"}</Link></li>}
          <li className="border-primary border-b-2"><Link to={"/Authors"}>{"Authors"}</Link></li>
          {currentUser===null&&<li className="border-primary border-b-2"><Link to={"/Login"}>Login</Link></li>}
        {currentUser===null&&<li className="border-primary border-b-2"><Link to={"/register"}>Register</Link></li>
       }
      </ul>
    </div>
  </div>
      </div>
    <div className="lg:navbar-start max-lg:navbar-center">
      <Link to={"/"}>
        <div className="text-primary text-3xl font-logo font-bold flex max-lg:justify-center">.bl<span className="text-blue-400 flex items-center"><TbMessageCircle2Filled/></span>g</div>
      </Link>
    </div>
    <div className="navbar-end flex items-center">
    <ul className="menu menu-horizontal text-primary focus:text-primary max-lg:hidden ">
        <li><Link to={"/"}>{"Home"}</Link></li>
        {currentUser!==null&&<li><Link to={"/Dashboard/dummy"}>{"Dashboard"}</Link></li>}
        <li><Link to={"/Authors"}>{"Authors"}</Link></li>
        
    </ul>
    {currentUser!==null&&<div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-primary btn-circle m-1 sticky"><img className='rounded-[50%]' src={avatars}/></div>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to={"/profile/check"}>Your Profile</Link></li>
      <li><Link to={"/post/createpost"}>Create post</Link></li>
      <li><Link to={"/logout"}>LogOut</Link></li>
    </ul>
    </div>}
    {currentUser===null&&<div className='flex min-w-[10vw] rounded max-lg:hidden'>
        <div className='btn btn-primary btn-sm text-white'><Link to={"/Login"}>Login</Link></div>
        <div className='btn btn-sm border border-primary mx-1 text-primary bg-white'><Link to={"/register"}>Register</Link></div>
        </div>}
    </div>
    </div>
  )
}

export default Header;