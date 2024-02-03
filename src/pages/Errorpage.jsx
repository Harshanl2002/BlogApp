import React from 'react'
import ErrorImg from "../assets/404.png"
import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <section className="p-5 bg-green-100 flex max-lg:flex-col min-h-[100vh] min-w-[100vw] overflow-hidden items-center lg:justify-evenly max-lg:justify-start">
      <div className="flex items-center justify-center ">
        <img src={ErrorImg} className="lg:w-[40vw] max-lg:w-[60vh]"/>
      </div>
      <div className="flex flex-col items-center justify-center font-poppins">
        <h1 className="lg:text-[100px] font-black select-none max-lg:text-3xl">404</h1>
        <h1 className="lg:text-3xl select-none">Page Not Found!!!</h1>
        <Link to={"/"}  className="my-10 btn btn-primary">Back to Home</Link>
      </div>
    </section>
  )
}


export default Errorpage;
