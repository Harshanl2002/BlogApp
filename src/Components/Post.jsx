import React from 'react';
import { Link } from 'react-router-dom';
import Postauthor from './Postauthor';

const PostItem = ({postId,thumbnail,catogory,title,content,author_id}) => {
    const body=content.length>145?content.substr(0,145)+"...":content;
    const tit=title.length>30?content.substr(0,30)+"...":title                             ;
  return (
    <div className="lg:max-w-[25vw] rounded-xl shadow-xl hover:shadow-[#868585] flex flex-col border justify-between bg-white font-poppins">
        <figure className="rounded-xl p-2">
            <Link to={`/post/${postId}`}>
                <img src={thumbnail} alt={title} className="rounded-xl lg:w-[25vw] lg:h-[30vh]"/>
            </Link>
        </figure>
        <Link to={`/post/${postId}`} className="min-h-[20vh]">
            <div className="p-2">
                <h1 className="font-bold text-xl text-black">{tit}</h1>
                <p className="text-wrap text-[#1e1e1e] text-[12px]">{body}</p>
            </div>
        </Link>
        <div className="flex justify-between items-center py-2 px-4">
            <Postauthor author_id={author_id}/>
            <Link to={`/posts/catagory/${catogory}`} className="badge badge-outline text-[8px]">
                {catogory}
            </Link>
        </div>
    </div>
  )
}

export default PostItem;