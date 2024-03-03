import React,{useContext,useEffect} from 'react'
import { useParams } from 'react-router';
import { BaseURIAPI,BaseURI } from '../const.URI';
import  axios from 'axios';
import { UserContext } from '../context/user.context';
import Spinner from '../Components/spinner';
import { useNavigate } from 'react-router';
export default function Deletepost() {
  const {id} = useParams();
  const {currentUser}=useContext(UserContext);
  const token=`Bearer ${currentUser.token}`;
  const navigate=useNavigate();
  useEffect(()=>{
    submithandeller();
  },[])
  const submithandeller=async(e)=>{
    try {
      const myHeaders = {
        'Content-Type': "text/json",
        'Authorization': token, 
      };
      const response=await axios.delete(`${BaseURIAPI}posts/del/${id}`,{headers:myHeaders});
      const val=response.data;
      // console.log(val);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='min-h-[80vh] flex justify-center items-center'><Spinner/></div>
  )
}
