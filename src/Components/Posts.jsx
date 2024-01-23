import React,{useState} from 'react'
import PostItem from './Post';

import b1 from "../assets/mern-blog-assets-main/blog1.jpg";
import b2 from "../assets/mern-blog-assets-main/blog2.jpg";
import b3 from "../assets/mern-blog-assets-main/blog3.jpg";
import b4 from "../assets/mern-blog-assets-main/blog4.jpg";
import b5 from "../assets/mern-blog-assets-main/blog5.jpg";
import b6 from "../assets/mern-blog-assets-main/blog6.jpg";
import b7 from "../assets/mern-blog-assets-main/blog7.jpg";
import b8 from "../assets/mern-blog-assets-main/blog8.jpg";
import b9 from "../assets/mern-blog-assets-main/blog9.jpg";


const Dummypost=[
    {
        id:1,
        thumbnail:b1,
        catogory:"education",
        title:"new post",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        author_id:1
    },
    {
        id:2,
        thumbnail:b2,
        catogory:"Agriculture",
        title:"new post",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        author_id:2
    },
    {
        id:3,
        thumbnail:b3,
        catogory:"Movies",
        title:"new post",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        author_id:3
    },
    {
        id:4,
        thumbnail:b4,
        catogory:"Food",
        title:"new post",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        author_id:4
    },
    {
        id:5,
        thumbnail:b5,
        catogory:"Technology",
        title:"new post",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        author_id:5
    },
    {
        id:6,
        thumbnail:b6,
        catogory:"Entertainment",
        title:"new post",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        author_id:6
    },
    {
        id:7,
        thumbnail:b7,
        catogory:"Health",
        title:"new post",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        author_id:7
    },
    {
        id:8,
        thumbnail:b8,
        catogory:"uncatagorized",
        title:"new post",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        author_id:8
    },
    {
        id:9,
        thumbnail:b9,
        catogory:"finance",
        title:"new post",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        author_id:9
    }
]

const Posts = () => {
    const [posts,setPosts]=useState(Dummypost)
  return (
    <section className="grid lg:grid-cols-3 gap-10 ">
        {
            posts.map(({id,thumbnail,catogory,title,content,author_id})=>
            <PostItem key={id} postId={id} thumbnail={thumbnail} catogory={catogory} title={title} content={content} author_id={author_id} />)
        }
    </section>
  )
}

export default Posts