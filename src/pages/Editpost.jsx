import React, { useState,useContext,useEffect } from 'react'
import {cat,editpostvar} from "../const";
import img from "../assets/img.jpg";
import { useParams } from 'react-router';
import { BaseURIAPI,BaseURI } from '../const.URI';
import  axios from 'axios';
import { UserContext } from '../context/user.context';
import Spinner from '../Components/spinner';

export default function Editpost() {
  const  [title,SetTitle]=useState('New Post');
const [catagory,SetCatagory]=useState('Uncatagorized');
const [body,setBody]=useState('Hello Its a New Post');
const [thumbnail,setThumbnail]=useState(img);
const [thumpnail,setThumpnail]=useState(img);
const {currentUser}=useContext(UserContext);
const _id=currentUser.id;
const token=`Bearer ${currentUser.token}`;
const {id}=useParams();

const [spiner,setSpinner]=useState(true)
useEffect(()=>{
  getPost();
},[])
const getPost=async ()=>{
  try {
    setSpinner(true);
    const response= await axios.get(BaseURIAPI+"posts/"+id);
    const data=response.data;
    // console.log(data);
    SetTitle(data.title);
    setBody(data.content);
    SetCatagory(data.catagory);
    setThumbnail( `${BaseURI}/assets/thumpnails/${data.thumpnail}`);
    setSpinner(false)
  } catch (error) {
    setSpinner(false)
    console.log(error);
  }
}
const submithandeller=async(e)=>{
  e.preventDefault()
  try {
    setSpinner(true);
    const myHeaders = {
      'Content-Type': "text/json",
      'Authorization': token, 
    };
    const formdata=new FormData();
    thumpnail?formdata.append("thumpnail",thumpnail):null;
    formdata.append("title",title);
    formdata.append("content",body);
    formdata.append("catagory",catagory);
    // console.log(formdata);
    const response=await axios.put(`${BaseURIAPI}posts/edit/${id}`,formdata,{headers:myHeaders});
    const val=response.data;
    setSpinner(false);
    // navigate('/');
    // console.log(val);
    // console.log({title,catagory,content:body,thumpnail});
  } catch (error) {
    setSpinner(false);
    console.log(error);
  }
}
  return (
    <section className='min-h-[80vh] justify-center items-center'>
      { spiner?<Spinner/>:<div className='min-h-[80vh] font-poppins p-5'>
      <h1 className="text-[25px] font-bold text-black">Edit Post</h1>
      <div className=' min-w-[90vw] max-w-[90vw] flex justify-center max-lg:flex-col my-10 bg-white shadow-xl min-h-[80vh]'>
        <div className='min-w-[30vw] max-w-[30vw] shadow-xl flex flex-col items-center p-5 max-lg:min-w-[100%]'>
          <img src={thumbnail} alt='img' className='w-[90%] h-[50%] rounded mb-10' />
          <input type='file' accept='image/*' name='thumbnail' id='thumbnail' onChange={e=>{
            setThumpnail(e.target.files[0]);
            setThumbnail(URL.createObjectURL(e.target.files[0]))}} className='hidden' />
          <label htmlFor='thumbnail' className='btn btn-warning'>Change photo</label>
        </div>
        <div className='min-w-[60vw] max-w-[60vw] max-lg:min-w-[100%]'>
          <form className='flex flex-col p-10 ' onSubmit={submithandeller}>
            <label htmlFor='Title' className='font-bold text-black text-[20px]'>Title</label>
            <input type='text' name='Title' id='Title' className='input input-bordered border-black focus:outline-none font-bold text-black my-2' placeholder='New Post' value={title} onChange={e=>SetTitle(e.target.value)} autoFocus/>
            <label htmlFor='catagory' className='font-bold text-black text-[20px]'>Catagory</label>
            <select name='catagory' id='catagory' className='my-2 font-bold border-b border-black p-1 focus:outline-none text-[16px] text-black' value={catagory} onChange={e=>SetCatagory(e.target.value)}>
              {
                cat.map((item)=><option key={item}>{item}</option>)
              }
            </select>
            <label htmlFor='Body' className='font-bold text-black text-[20px]'>Content</label>
            <textarea name="Body" type='textarea' className='min-h-[25vh] my-2 rounded border border-black p-2' value={body} onChange={(e)=>setBody(e.target.value)}/>
            <button type='submit' className='btn btn-primary btn-sm self-end'>Update</button>
          </form>
        </div>
      </div>
      </div>}
    </section>
  )
}
