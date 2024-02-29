import React,{useContext, useState,useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import avatar from "../assets/user-male-circle.png";
import { FaEdit,FaCheck } from "react-icons/fa";
import { BaseURIAPI,BaseURI } from '../const.URI';
import  axios from 'axios';
import { UserContext } from '../context/user.context';
import { toFormData } from 'axios';
import { Avatarcontext } from '../context/Avathar.context';



const value={
  name:"Adler Coffey",
  Email:"AdlerCoffey@gmail.com",
  password:"",
  newpassword:"",
  confirmPassword:""
}
const Profile = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const navigate=useNavigate();
  const {currentUser}=useContext(UserContext);
  const {SetcurrentAvathar}=useContext(Avatarcontext);


  const id=currentUser.id;
  const token=`Bearer ${currentUser.token}`;
  
  const [values,setValue]=useState(value);
  useEffect(()=>{
    getvalues();
  },[])
  const getvalues=async()=>{
    try{
      const myHeaders = {
        'Content-Type': "text/json",
        'Authorization': token, // Add any other headers as needed
      };
      const response=await axios.get(`${BaseURIAPI}/user/byID/?:id=${id}`,{headers:myHeaders});
      const val=response.data;
      if(val)
      {
        const new_val=value;
        new_val.name=val.name;
        new_val.Email=val.email;
      }
      console.log(response.data);
      setAvatar(`${BaseURI}/assets/uploads/${val.avatar}`);
      return setValue(new_val);
    }
    catch(error)
    {
      return setErrorMsg(error.response);
    }

  }
  const [avatars,setAvatar]=useState(avatar);

  
  const changeInputHandeler=(e)=>{
    setValue(prevState=>{
      return {...prevState,[e.target.name]:e.target.value}
    })
  }
  
  const changeAvatar=async(e)=>{
    try {
      // console.log(token);
      const  file=e.target.files[0];
      const myHeaders = {
        'Content-Type': file.type,
        'Authorization': token, // Add any other headers as needed
      };
      const response=await axios.post(BaseURIAPI+"user/change-avatar",toFormData({avatar:file}),{headers:myHeaders});
      const avathar=await response.data;
      // console.log(avathar);
      if(avathar) {
        setAvatar(`${BaseURI}/assets/uploads/${avathar.data.avatar}`);
        SetcurrentAvathar({avatarURL:`${BaseURI}/assets/uploads/${avathar.data.avatar}`})
      }
    } catch (error) {
      return setErrorMsg(error.response.data.message);
    }
    
  }

  return (
    <section className="min-h-[100vh] p-5 flex flex-col items-center font-poppins">
      <div className="flex flex-col items-center">
        <Link to={`/Dashboard/${id}`} className="btn btn-primary btn-sm text-white">My Posts</Link>
      </div>
      <div className="my-2 flex items-center">
        <img src={avatars} alt="current User Profile photo" className="rounded-[50%] block lg:w-[15vw] lg:h-[30vh] max-lg:w-[50vw] max-lg:h-[30vh]"  />
        <input type='file' name='avatar' id='avatar' accept=".jpg,.jpeg,.png" onChange={changeAvatar}  className="hidden"/>
          <label htmlFor='avatar' className='btn btn-primary btn-circle btn-sm self-end flex ms-[-35px] lg:my-[30px]'><FaEdit/></label>
      </div>
      {errorMsg&&<p className="min-w-[50vw] max-lg:w-[85vw] text-center  bg-red-300 text-[#1e1e1e] text-[16px] rounded-sm p-2">{errorMsg}</p>}
      <div className="mb-5 flex flex-col items-center">
        <form className="flex flex-col min-h-[45vh] justify-evenly">
          <input type='text' name='name' placeholder="Name" className="lg:w-[50vw] max-lg:w-[85vw] input input-sm focus:outline-none border border-[#8a8a8a] rounded-[4px]" value={values.name} onChange={changeInputHandeler} />
          <input type='text' name='Email' placeholder="Email" className="lg:w-[50vw] max-lg:w-[85vw] input input-sm focus:outline-none border border-[#8a8a8a] rounded-[4px]" value={values.Email} onChange={changeInputHandeler}/>
          <input type='password' name='current_password' placeholder="Current password" className="lg:w-[50vw] max-lg:w-[85vw] input input-sm focus:outline-none border border-[#8a8a8a] rounded-[4px]" value={values.password} onChange={changeInputHandeler} />
          <input type='password' name='new_password' placeholder="New Password" className="lg:w-[50vw] max-lg:w-[85vw] input input-sm focus:outline-none border border-[#8a8a8a] rounded-[4px]" value={values.newpassword} onChange={changeInputHandeler} />
          <input type='password' name='confirm_password' placeholder="Confirm Password" className="lg:w-[50vw] max-lg:w-[85vw] input input-sm focus:outline-none border border-[#8a8a8a] rounded-[4px]" value={values.confirmPassword} onChange={changeInputHandeler} />
          <button type='submit' className='btn btn-sm btn-primary mx-auto'>{"Update Changes"}</button>
        </form>
      </div>
    </section>
  )
}

export default Profile;