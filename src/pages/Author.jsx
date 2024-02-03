import React,{useState} from 'react'
import {Authors} from "../const";
import { Link } from 'react-router-dom';

const Author = () => {
  const [author,setAuthors]=useState(Authors); 
  return (
    <section className="flex justify-center items-center p-5">
    <section className=" min-h-[70vh] flex flex-col justify-center items-center">
      {
        author.length>0?
        <div  className="grid lg:grid-cols-3 gap-10">
          {
            author.map(({id,avatar,name,posts})=>
            <Link key={id} to={`/posts/Authors/${id}`}>
              <div  className=" min-w-[20vw] max-h-[15vh] rounded-xl shadow-xl hover:shadow-[#868585] flex border justify-around bg-white font-poppins">
                <figure className="rounded-xl p-2 flex justify-center">
                  <img src={avatar} alt={`This is an image of author or user with ${name}`} className="rounded-[50%] w-[50%]"/>
                </figure>
                <div className=" my-[5%] min-h-[90%] max-h-[90%] min-w-[50%]">
                  <h3 className="font-poppins font-bold text-black">{name}</h3>
                  <small className="text-[10px] font-poppins ">No of posts:{posts}</small>
                </div>
              </div>
            </Link>
            )
          }
        </div>
        :<h2 className="text-3xl text-[#1e1e1e] font-Roboto font-bold">{"No Authors or Users found !!!".toLocaleUpperCase()}</h2>
      }
    </section>
  </section>
  )
}

export default Author;