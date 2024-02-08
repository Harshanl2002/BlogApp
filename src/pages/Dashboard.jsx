import React ,{useState} from 'react';
import { Dashboardposts } from '../const';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [posts,SetPosts]=useState(Dashboardposts);
  return (
    <section className="flex justify-center items-start min-h-[80vh] font">
      {
        posts.length  > 0 ?
        <div className='my-5'>
          {
            posts.map((item) => 
            <div key={item.id} className="min-w-[85vw] max-lg:min-w-[80vw] max-lg:max-w-[80vw] shadow-xl bg-white mb-2 min-h-[10vh] rounded flex max-lg:flex-col justify-between px-4 max-lg:py-2 items-center">
              <div className="flex items-center max-lg:flex-col max-lg:my-2">
                <figure>
                  <img src={item.thumbnail} alt={item.title} className='w-[60px] rounded-sm'/>
                </figure>
                <h2 className="mx-2 font-bold text-black text-[14px]">{item.title}</h2>
              </div>
              <div className='flex items-center min-w-[15%] justify-evenly max-lg:min-w-full max-lg:flex-col-reverse'>
                <Link to={`/post/${item.id}`} className="text-[#1e1e1e] text-xs max-lg:my-2">View</Link>
                <div className='min-w-[75%] flex justify-evenly items-center max-lg:min-w-full'>
                <Link to={`/post/Editpost/${item.id}`} className="btn btn-info btn-xs">Edit</Link>
                <Link to={`/post/DeletePost/${item.id}`} className="btn btn-error btn-xs">Delete</Link>
                </div>
              </div>
            </div>)
          }
        </div>
        :<h2 className="text-3xl text-[#1e1e1e] font-Roboto font-bold">{"No posts found !!!".toLocaleUpperCase()}</h2>
      }
    </section>
  )
}

export default Dashboard;