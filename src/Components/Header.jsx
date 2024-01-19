import React from 'react';
import { Link } from 'react-router-dom';
import usermale from "../assets/user-male-circle.png"
import userfemale from "../assets/user-female-circle.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { ImCircleLeft } from "react-icons/im";


const Header = () => {
  let Profilename="Harshan";
  return (
   <div className="navbar bg-primary font-poppins sticky top-0">
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
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button w-[60%] rounded-badge my-5">
          <ImCircleLeft/>Close</label>
          <li className="border-primary border-b-2"><Link to={"/"}>{"Home"}</Link></li>
          <li className="border-primary border-b-2"><Link to={"/Dashboard"}>{"Feeds"}</Link></li>
          <li className="border-primary border-b-2"><Link to={"/Authors"}>{"Authors"}</Link></li>
      </ul>
    </div>
  </div>
      </div>
    <div className="lg:navbar-start max-lg:navbar-center">
      <Link to={"/"}>
        <div className="text-white text-3xl font-logo font-bold flex max-lg:justify-center">.bl<span className="text-blue-400 flex items-center"><TbMessageCircle2Filled/></span>g</div>
      </Link>
    </div>
    <div className="lg:navbar-center max-lg:hidden text-white">
      <form>
        <input type="text" placeholder="Search..." className="input input-bordered input-primary w-full max-w-xs bg-[#496649]"/>
      </form>
    </div>
    <div className="navbar-end">
    <ul className="menu menu-horizontal text-white max-lg:hidden">
        <li><Link to={"/"}>{"Home"}</Link></li>
        <li><Link to={"/Dashboard"}>{"Feeds"}</Link></li>
        <li><Link to={"/Authors"}>{"Authors"}</Link></li>
    </ul>
    <div className="dropdown  dropdown-bottom dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-primary btn-circle m-1"><img src={usermale}/></div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
      {/* <li><Link to={"/Login"}>Login</Link></li>
      <li><Link to={"/register"}>Register</Link></li> */}
      <li><Link to={"/profile/check"}>Your Profile</Link></li>
      <li><Link to={"/post/createpost"}>Create post</Link></li>
      <li><Link to={"/logout"}>LogOut</Link></li>
    </ul>
    </div>
    </div>
    </div>
  )
}

export default Header;