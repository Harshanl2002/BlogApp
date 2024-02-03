import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import avatar from "../assets/user-male-circle.png";
import { FaEdit,FaCheck } from "react-icons/fa";
const value={
  name:"Adler Coffey",
  Email:"AdlerCoffey@gmail.com",
}
const Profile = () => {
  const [avatars,setAvatar]=useState(avatar);
  const [values,setValue]=useState(value);
  const id=1;
  const changeInputHandeler=(e)=>{
    setValue(prevState=>{
      return {...prevState,[e.target.name]:e.target.value}
    })
  }
  return (
    <section className="min-h-[100vh] p-5 flex flex-col items-center font-poppins">
      <div className="flex flex-col items-center">
        <Link to={`/Dashboard/${id}`} className="btn btn-primary btn-sm text-white">My Posts</Link>
      </div>
      <div className="my-2 flex items-center">
        <img src={avatars} alt="current User Profile photo" className="rounded-[50%] lg:w-[15vw] lg:h-[30vh] max-lg:w-[50vw] max-lg:h-[30vh]"  />
        <input type='file' name='avatar' id='avatar' accept=".jpg,.jpeg,.png,.gif" onChange={(e)=>{ 
          setAvatar(URL.createObjectURL(e.target.files[0]))}}  className="hidden"/>
          <label htmlFor='avatar' className='btn btn-primary btn-circle btn-sm self-end absolute mx-[27vh] max-lg:mx-[21vh] lg:my-[30px]'><FaEdit/></label>
      </div>
      <p className="min-w-[50vw] max-lg:w-[85vw] text-center  bg-red-300 text-[#1e1e1e] text-[16px] rounded-sm p-2">{"This is an Error message"}</p>
      <div className="mb-5 flex flex-col items-center">
        <form className="flex flex-col min-h-[45vh] justify-evenly">
          <input type='text' name='name' placeholder="Name" className="lg:w-[50vw] max-lg:w-[85vw] input input-sm focus:outline-none border border-[#8a8a8a] rounded-[4px]" value={values.name} onChange={changeInputHandeler} />
          <input type='text' name='Email' placeholder="Email" className="lg:w-[50vw] max-lg:w-[85vw] input input-sm focus:outline-none border border-[#8a8a8a] rounded-[4px]" value={values.Email} onChange={changeInputHandeler}/>
          <input type='password' name='current_password' placeholder="Current password" className="lg:w-[50vw] max-lg:w-[85vw] input input-sm focus:outline-none border border-[#8a8a8a] rounded-[4px]" />
          <input type='password' name='new_password' placeholder="New Password" className="lg:w-[50vw] max-lg:w-[85vw] input input-sm focus:outline-none border border-[#8a8a8a] rounded-[4px]" />
          <input type='password' name='confirm_password' placeholder="Confirm Password" className="lg:w-[50vw] max-lg:w-[85vw] input input-sm focus:outline-none border border-[#8a8a8a] rounded-[4px]" />
          <button type='submit' className='btn btn-sm btn-primary mx-auto'>{"Update Changes"}</button>
        </form>
      </div>
    </section>
  )
}

export default Profile;