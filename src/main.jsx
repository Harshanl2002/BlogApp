import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Errorpage from "./pages/Errorpage";
import Layout from './Components/Layout';
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import EditPost from "./pages/Editpost";
import DeletePost from "./pages/Deletepost";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/Createpost";
import Catagorypost from './pages/Catagorypost';
import AuthorPost from "./pages/Authorpost";
import Author from "./pages/Author"


const router=createBrowserRouter([{
  path:"/",
  errorElement:<Errorpage/>,
  element:<Layout/>,
  children:[
    {index:true,element:<Home/>},
    {path:"Authors",element:<Author/>},
    {path:"Dashboard/:id",element:<Dashboard/>},
    {path:"profile/:id",element:<Profile/>},
    {path:"post/:id",element:<PostDetails/>},
    {path:"post/Editpost/:id",element:<EditPost/>},
    {path:"post/createpost",element:<CreatePost/>},
    {path:"post/DeletePost/:id",element:<DeletePost/>},
    {path:"posts/catagory/:cat",element:<Catagorypost/>},
    {path:"posts/Authors/:id",element:<AuthorPost/>},
  ]
},{path:"Login",element:<Login/>},
{path:"register",element:<Register/>},
{path:"Logout",element:<Logout/>},]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
