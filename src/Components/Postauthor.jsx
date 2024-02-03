import React from 'react';
import { Link } from 'react-router-dom';
import avatar from "../assets/mern-blog-assets-main/avatar1.jpg"
const Postauthor = ({author_id}) => {
  return (
    <div>
        <Link to={`/posts/Authors/${author_id}`} className="flex font-poppins">
            <figure>
                <img  src={avatar} className="w-[40px] rounded-sm"/>
            </figure>
            <div className="mx-2 my-1 max-w-[10vw] flex flex-col justify-between">
                <h5 className="font-bold text-sm text-wrap">By:{"Authorname"}</h5>
                <small className="text-[9px] text-nowrap">Just Now</small>
            </div>
        </Link>
    </div>
  )
}

export default Postauthor