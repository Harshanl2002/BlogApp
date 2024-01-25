import React,{useState} from 'react'
import PostItem from './Post';


import { Dummypost } from '../const';




const Posts = () => {
    const [posts,setPosts]=useState(Dummypost)
  return (
    <section className=" min-h-[70vh] flex flex-col justify-center items-center">
        {
            posts.length >0?
            <div className="grid lg:grid-cols-3 gap-10">
            {
                posts.map(({id,thumbnail,catogory,title,content,author_id})=>
                <PostItem key={id} postId={id} thumbnail={thumbnail} catogory={catogory} title={title} content={content} author_id={author_id} />)
            }
            </div>
                :<h2 className="text-3xl text-[#1e1e1e] font-Roboto font-bold">{"No posts found !!!".toLocaleUpperCase()}</h2>
        }
    </section>
  )
}

export default Posts