import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import avatar from "../assets/mern-blog-assets-main/avatar1.jpg";
import axios from 'axios';
import { BaseURI,BaseURIAPI } from '../const.URI';
const Postauthor = ({author_id,updatedAt}) => {
  const [data,setData]=useState({name:'Author\'s name',thumpnail:avatar,date:new Date(updatedAt).getDate()})
  useEffect(()=>{
    getvalues();
  },[])
  const getvalues=async()=>{
    try{
      const response=await axios.get(`${BaseURIAPI}/user/byID/${author_id}`);
      const val=response.data;
      //console.log(val)
      return setData({
        name:val.name,
        thumpnail:val.thumpnail!="basic"?`${BaseURI}/assets/uploads/${val.avatar}`:avatar,
        date:new Date(updatedAt).toLocaleDateString('en-US',{
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      });
    }
    catch(error)
    {
      console.log(error)
    }

  }
  return (
    <div>
        <Link to={`/posts/Authors/${author_id}`} className="flex font-poppins">
            <figure>
                <img  src={data.thumpnail} className="w-[40px] rounded-sm"/>
            </figure>
            <div className="mx-2 my-1 max-w-[10vw] flex flex-col justify-between">
                <h5 className="font-bold text-sm text-wrap">By:{data.name}</h5>
                <small className="text-[9px] text-nowrap">{data.date}</small>
            </div>
        </Link>
    </div>
  )
}

export default Postauthor