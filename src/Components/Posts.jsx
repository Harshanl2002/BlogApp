import React,{useState,useEffect} from 'react'
import PostItem from './Post';
import Spinner from './spinner';
import axios from 'axios';
import { BaseURI,BaseURIAPI } from '../const.URI';

const Posts = () => {
    const [posts,setPosts]=useState({});
    const [spiner,setSpinner]=useState(true);
    useEffect(()=>{getpost()},[])
    const getpost=async()=>{
      try {
        setSpinner(true);
        const response= await axios.get(BaseURIAPI+"posts/");
        const data=response.data;
        for(let i of data)
        {
          i.thumpnail=`${BaseURI}/assets/thumpnails/${i.thumpnail}`
        }
        //console.log(data);
        setPosts(data);
        setSpinner(false);
      } catch (error) {
        console.log(error);
        
      }
    }
  return (
    <section className=" min-h-[70vh] flex flex-col justify-center items-center">
        {spiner?<Spinner></Spinner>:
            posts.length >0?
            <div className="grid lg:grid-cols-3 gap-10">
            {
                posts.map(({_id,thumpnail,catagory,title,content,AuthorID,updatedAt})=>
                <PostItem key={_id} postId={_id} thumbnail={thumpnail} catogory={catagory} title={title} content={content} author_id={AuthorID} updatedAt={updatedAt}/>)
            }
            </div>
                :<h2 className="text-3xl text-[#1e1e1e] font-Roboto font-bold">{"No posts found !!!".toLocaleUpperCase()}</h2>
        }
    </section>
  )
}

export default Posts