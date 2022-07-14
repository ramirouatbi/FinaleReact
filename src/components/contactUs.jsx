import React from "react";
import CardClient from "./rates/cardClient";

export default function ContactUs() {
  return (
      <div className="block ">
       
    <div className="w-full justify-center flex">
   
        <div className="w-[360px] sm:w-[500px] h-[700px] ">
        <h1 className="text-center mb-[30px] text-3xl text-black">Make a request</h1>
        <div className="mb-[30px]">
        <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
        Full name
      </label>
      <div className="relative">
        <div className="absolute text-gray-500 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
        </div>
        <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:gray-300 dark:focus:border-gray-300" placeholder="Please enter your name" />
      </div>
        </div>
        <div className="mb-[30px]">
        <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
        Phone
      </label>
      <div className="relative">
        <div className="absolute text-gray-500 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        </div>
        <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:gray-300 dark:focus:border-gray-300" placeholder="Please enter your phone number" />
      </div>
        </div>
        <div className="mb-[30px]">
        <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
        Email
      </label>
      <div className="relative">
        <div className="absolute text-gray-500 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
        <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:gray-300 dark:focus:border-gray-300" placeholder="Please enter your email" />
      </div>
        </div>
        <div className="mb-[30px]">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full h-[150px] text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        </div>
        <button type="button" class="text-white justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>

        </div>
        
    </div>
    
    </div>
  );
}
