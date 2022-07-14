import React from 'react'
import room from '../../imgs/room.jpg'
import logo2blue from "../../imgs/logo2blue.png";
  
export default function GuideYou() {
  return (
    <div className='w-[full] h-[700px] mb-[100px] flex bg-fixed bg-center bg-no-repeat bg-cover bg-[url("https://www.zupimages.net/up/22/24/ucyk.jpg")] '>
        
         <div className='mr-[20px]'>
          <img src={logo2blue} alt='logo img' />
        </div>
        <div className='mt-[150px] ml-[-15px]'>
        <h1 className='text-white text-6xl mb-[20px]  '>We guide you</h1>
        <h2 className='text-white text-xl mb-[20px]'>Are you planning to install shelves, a false ceiling, curtain rods, or a new drawer slide?<br /> Don't panic! We are here to help you with all your tasks, big or small, simple or complex</h2>
        <div className='flex'>
            <button type="button" className="w-[200px]  bg-transparent text-white hover:bg-slate-200 hover:text-white  
            border border-white focus:outline-none font-medium rounded-3xl text-md px-5 py-2.5 text-center 
            mr-2 mb-2 dark:hover:text-white ">
                <div className='flex justify-center'>
                <i className="pt-[3.5px] mr-[10px] fa-solid fa-phone"></i>
                <h1>+216 22516179</h1>
                </div>
            </button>
            <button type="button" className="w-[170px] bg-transparent text-white hover:bg-slate-200 hover:text-white border border-white focus:outline-none font-medium rounded-3xl text-md px-5 py-2.5 text-center mr-2 mb-2 dark:hover:text-white">
                <div className='flex justify-center'>
                <i className="pt-[3.5px] mr-[10px] fa-solid fa-user"></i>
                <h1>CHIHAOUI</h1>
                </div>
            </button>
        </div>
        </div>
       
    </div>
  )
}
