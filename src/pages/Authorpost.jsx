import React,{useState,useEffect} from 'react';
import PostItem from '../Components/Post';
import { useParams } from 'react-router';
import axios from 'axios';
import { BaseURI,BaseURIAPI } from '../const.URI';
import Spinner from '../Components/spinner';


const Authorpost = () => {
  const [posts,setPosts]=useState({});
  const [spiner,setSpinner]=useState(true)
  const {id}=useParams()
  useEffect(()=>{getpost()},[])
  const getpost=async()=>{
    try {
      setSpinner(true);
      const response= await axios.get(BaseURIAPI+"posts/Author/"+id);
      const data=response.data;
      for(let i of data)
      {
        i.thumpnail=`${BaseURI}/assets/thumpnails/${i.thumpnail}`
      }
      // console.log(data);
      setPosts(data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
      console.log(error);
    }
  }
  return (
    <section className="min-h-[70vh] flex justify-center items-center p-5">
      {spiner?<Spinner/>:<section className=" min-h-[70vh] flex flex-col justify-center items-center">
          {
              posts.length >0?
              <div className="grid lg:grid-cols-3 gap-10">
              {
                  posts.map(({_id,thumpnail,catagory,title,content,AuthorID,updatedAt})=>
                  <PostItem key={_id} postId={_id} thumbnail={thumpnail} catogory={catagory} title={title} content={content} author_id={AuthorID} updatedAt={updatedAt}/>)
              }
              </div>
                  :<h2 className="text-3xl text-[#1e1e1e] font-Roboto font-bold">{"No posts found !!!".toLocaleUpperCase()}</h2>
          }
      </section>}
    </section>)
}

export default Authorpost;