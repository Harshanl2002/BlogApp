import React, { useState } from 'react'
import {cat,modules,format} from "../const";
import img from "../assets/img.jpg";
import ReactQuill,{ Quill } from 'react-quill'; // ES6
import "react-quill/dist/quill.snow.css";

function Createpost() {
const  [title,SetTitle]=useState('New Post');
const [catagory,SetCatagory]=useState('Uncatagorized');
const [body,setBody]=useState('Hello Its a New Post');
const [thumbnail,setThumbnail]=useState(img);
  return (
    <section className='min-h-[80vh] font-poppins p-5'>
      <h1 className="text-[25px] font-bold text-black">Create Post</h1>
      <div className=' min-w-[90vw] max-w-[90vw] flex justify-center max-lg:flex-col my-10 bg-white shadow-xl min-h-[80vh]'>
        <div className='min-w-[30vw] max-w-[30vw] shadow-xl flex flex-col items-center p-5 max-lg:min-w-[100%]'>
          <img src={thumbnail} alt='img' className='w-[90%] h-[50%] rounded mb-10' />
          <input type='file' accept='image/*' name='thumbnail' id='thumbnail' onChange={e=>setThumbnail(URL.createObjectURL(e.target.files[0]))} className='hidden' />
          <label htmlFor='thumbnail' className='btn btn-warning'>Change photo</label>
        </div>
        <div className='min-w-[60vw] max-w-[60vw] max-lg:min-w-[100%]'>
          <form className='flex flex-col p-10 '>
            <label htmlFor='Title' className='font-bold text-black text-[20px]'>Title</label>
            <input type='text' name='Title' id='Title' className='input input-bordered border-black focus:outline-none font-bold text-black my-2' placeholder='New Post' value={title} onChange={e=>SetTitle(e.target.value)} autoFocus/>
            <label htmlFor='catagory' className='font-bold text-black text-[20px]'>Catagory</label>
            <select name='catagory' id='catagory' className='my-2 font-bold border-b border-black p-1 focus:outline-none text-[16px] text-black' value={catagory} onChange={e=>SetCatagory(e.target.value)}>
              {
                cat.map((item)=><option key={item}>{item}</option>)
              }
            </select>
            <label htmlFor='Body' className='font-bold text-black text-[20px]'>Content</label>
            <ReactQuill name="Body" modules={modules} formats={format} className='min-h-[25vh] my-2 rounded' style={{"border-bottom":"1px solid #000"}} value={body} onChange={setBody}/>
            <button type='submit' className='btn btn-primary btn-sm self-end'>Post</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Createpost
