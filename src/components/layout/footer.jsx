import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#EDEEEC] text-center w-full h-[1000px] sm:h-[370px] pt-16 pr-0 font-poppins font-light leading-6">
  	 <div className="m-0">
  	 	<div className="grid grid-cols-1 sm:grid sm:grid-cols-3 flex-wrap justify-center">
  	 		<div className="mb-[50px]">
  	 			<h4 className='text-lg text-center text-gray-600 capitalize mb-8 font-medium relative'>Company</h4>
				  
  	 			<ul className='list-style-type: none pl-3.5'>
  	 				<li className='text-gray-600 mb-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300'><a href="#">About us</a></li>
  	 				<li className='text-gray-600 mb-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300'><a href="#">FAQ</a></li>
  	 				<li className='text-gray-600 mb-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300'><a href="#">Blog</a></li>
  	 				<li className='text-gray-600 mb-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300'><a href="#">Contact</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="mb-[50px]">
  	 			<h4 className="text-lg text-gray-600 capitalize mb-8 font-medium relative">Products</h4>
  	 			<ul className='list-style-type: none pl-3.5 mb-1 '>
  	 				<li className='text-gray-600 mb-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300'><a className='' href="#">Acrymatt Panels</a></li>
  	 				<li className='text-gray-600 mb-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300'><a href="#">Anti-Scratch Acrylic Panels</a></li>
  	 				<li className='text-gray-600 mb-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300'><a href="#">Standart Acrylic Panels</a></li>
  	 				<li className='text-gray-600 mb-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300'><a href="#">High Gloss Panels</a></li>
					<li className='text-gray-600 mb-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300'><a href="#">Premium Panels</a></li>
  	 			</ul>
  	 		</div>
  	 			<div className="">
  	 			<h4 className="text-lg text-gray-600 capitalize mb-8 font-medium relative">Follow Us</h4>
  	 			<div className="flex justify-center sm:flex ">
					   {/* <div className='rounded-full bg-gray-200'>
					   </div> */}
					<a href="#" className='rounded-lg mr-10 h-10 w-10 text-blue-900'>
					<div className="rounded-full w-[30px] h-[30px] bg-[#EDEEEC] hover:bg-white">
						<i className="fa-brands fa-facebook-f pl-1 pt-2"></i>
					</div>
					</a>
					<a href="#" className='rounded-lg mr-10 h-10 w-10 text-blue-900'>
					<div className="rounded-full w-[30px] h-[30px] bg-[#EDEEEC] hover:bg-white">
						<i className="fa-brands fa-twitter pl-1 pt-2"></i>
					</div>
					</a>
					<a href="#" className='rounded-lg mr-10 h-10 w-10 text-blue-900'>
					<div className="rounded-full w-[30px] h-[30px] bg-[#EDEEEC] hover:bg-white">
						<i className="fa-brands fa-instagram pl-1 pt-2"></i>
					</div>
					</a>
					<a href="#" className='rounded-lg mr-10 h-10 w-10 text-blue-900'>
					<div className="rounded-full w-[30px] h-[30px] bg-[#EDEEEC] hover:bg-white">
						<i className="fa-brands fa-linkedin-in pl-1 pt-2"></i>
					</div>
					</a>
  	 				 {/* <a href="#" className='mr-10 h-10 w-10 text-blue-900'><i className="fa-brands fa-twitter"></i></a>
  	 				 <a href="#" className='mr-10 h-10 w-10 text-blue-900'><i className="fa-brands fa-instagram"></i></a>
					 <a href="#" className='mr-10 h-10 w-10 text-blue-900'><i className="fa-brands fa-linkedin-in"></i></a> */}
  	 			
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}
