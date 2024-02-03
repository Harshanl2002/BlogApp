import React,{useState} from 'react'
import {DummyCatagorypost} from "../const";
import PostItem from '../Components/Post';
import { useRef } from 'react';
export default function Catagorypost() {
  const [posts,setPosts]=useState(DummyCatagorypost);
  const url = window.location.href;
  const cat=(url.substring(37,url.length));
  return (
    <section className="flex justify-center items-center p-5">
      <section className=" min-h-[70vh] flex flex-col justify-center items-center">
          {
              posts.length >0?
              <div className="grid lg:grid-cols-3 gap-10">
              {
                  posts.map(({id,thumbnail,catogory,title,content,author_id})=>
                  <PostItem key={id} postId={id} thumbnail={thumbnail} catogory={cat} title={title} content={content} author_id={author_id} />)
              }
              </div>
                  :<h2 className="text-3xl text-[#1e1e1e] font-Roboto font-bold">{"No posts found !!!".toLocaleUpperCase()}</h2>
          }
      </section>
    </section>)
}
