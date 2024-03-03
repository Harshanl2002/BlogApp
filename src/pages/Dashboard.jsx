import React ,{useState,useContext,useEffect} from 'react';
import { Dashboardposts } from '../const';
import { Link } from 'react-router-dom';
import { BaseURIAPI,BaseURI } from '../const.URI';
import  axios from 'axios';
import { UserContext } from '../context/user.context';
import { Avatarcontext } from '../context/Avathar.context';
import Spinner from '../Components/spinner';

const Dashboard = () => {
  const [spiner,setSpinner]=useState(false);
  const {currentUser}=useContext(UserContext);
  const [posts,setPosts]=useState(Dashboardposts);
  useEffect(()=>{getpost()},[])
  const getpost=async()=>{
    try {
      setSpinner(true);
      const response= await axios.get(BaseURIAPI+"posts/Author/"+currentUser.id);
      const data=response.data;
      for(let i of data)
      {
        i.thumpnail=`${BaseURI}/assets/thumpnails/${i.thumpnail}`
      }
      // console.log(data);
      setPosts(data);
      setSpinner(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="flex justify-center items-start min-h-[80vh] font">
      {
        spiner? 
        <Spinner/> :
        posts.length  > 0 ?
        <div className='my-5'>
          {
            posts.map((item) => 
            <div key={item._id} className="min-w-[85vw] max-lg:min-w-[80vw] max-lg:max-w-[80vw] shadow-xl bg-white mb-2 min-h-[10vh] rounded flex max-lg:flex-col justify-between px-4 max-lg:py-2 items-center">
              <div className="flex items-center max-lg:flex-col max-lg:my-2">
                <figure>
                  <img src={item.thumpnail} alt={item.title} className='w-[60px] rounded-sm'/>
                </figure>
                <h2 className="mx-2 font-bold text-black text-[14px]">{item.title}</h2>
              </div>
              <div className='flex items-center min-w-[15%] justify-evenly max-lg:min-w-full max-lg:flex-col-reverse'>
                <Link to={`/post/${item._id}`} className="text-[#1e1e1e] text-xs max-lg:my-2">View</Link>
                <div className='min-w-[75%] flex justify-evenly items-center max-lg:min-w-full'>
                <Link to={`/post/Editpost/${item._id}`} className="btn btn-info btn-xs">Edit</Link>
                <Link to={`/post/DeletePost/${item._id}`} className="btn btn-error btn-xs">Delete</Link>
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