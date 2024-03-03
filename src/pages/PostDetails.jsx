import React,{useState,useEffect,useContext} from 'react'
import Postauthor from '../Components/Postauthor';
import { Link } from 'react-router-dom';
import thumbnail from "../assets/mern-blog-assets-main/blog1.jpg";
import { useParams } from 'react-router-dom';
import  axios from 'axios'; 
import { BaseURIAPI,BaseURI } from '../const.URI';
import Spinner from '../Components/spinner';
import { UserContext } from '../context/user.context';



const PostDetails = () => {
  const {id}=useParams();
  const [post,setPost]=useState({});
  const {currentUser}=useContext(UserContext);
  const [spiner,setSpinner]=useState(true)
  useEffect(()=>{
    getPost();
  },[])
  const getPost=async ()=>{
    try {
      setSpinner(true);
      const response= await axios.get(BaseURIAPI+"posts/"+id);
      const data=response.data;
      console.log(data.content.split("\n"));
      setPost({title: data.title,thumpnail: `${BaseURI}/assets/thumpnails/${data.thumpnail}`,content: data.content,AuthorID: data.AuthorID,updatedAt: data.updatedAt});
      setSpinner(false)

    } catch (error) {
      setSpinner(false);
      console.log(error);
    }
  }
  return (
    <section className=" flex justify-center items-center p-5 font-poppins">
      {spiner?<Spinner></Spinner>:<div className="lg:max-w-[70vw] max-lg:max-w-[85vw] rounded-md bg-white mx-auto flex flex-col p-10">
        <div className="flex justify-between max-lg:flex-col">
          <Postauthor author_id={post.AuthorID}  updatedAt={post.updatedAt}/>
          {currentUser&&(currentUser.id==post.AuthorID)?<div className="flex gap-2 items-center max-lg:my-2">
            <Link to={"/post/Editpost/"+id} className="btn btn-info btn-sm">EditPost</Link>
            <Link to={"/post/DeletePost/"+id} className="btn btn-error btn-sm">DeletePost</Link>
          </div>:<></>}
        </div>
        <h1 className="my-5 text-xl font-black">{post.title}</h1>
        <figure className="mb-5">
          <img src={post.thumpnail} className="max-h-[70vh] w-full rounded-md"/>
        </figure>
        <div className="mx-2 text-[#1e1e1e] font-Roboto font-medium">
          {
            post.content.split("\r\n").map((data,index)=>{
              return (
                <span key={index}>
                   <p className="my-2 text-sm text-justify">{data}</p>
                </span>
              )
            })
          }
        </div>
      </div>}
    </section>
  )
}

export default PostDetails;