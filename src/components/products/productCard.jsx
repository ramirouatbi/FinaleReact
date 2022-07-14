import React from 'react'
import prod1 from '../../imgs/products/prod1.jpeg'
import prod2 from '../../imgs/products/prod2.jpeg'
import prod3 from '../../imgs/products/prod3.jpeg'
import prod4 from '../../imgs/products/prod4.jpg'
import prod5 from '../../imgs/products/prod5.jpeg'
export default function ProductCard({title, price, img}) {
  return (
    //  ete en bas ligne de plus = mr-[20px] 
    <div className="w-[300px] h-[600px]  p-1  mb-[25px] max-w-sm rounded-md shadow-2xl border border-gray-200dark:bg-gray-800 dark:border-gray-700">
      <div className='mb-[20px]'>
          <img className='hover:scale-125' src={img} alt='img product' />
      </div>
      <div className='text-center mb-[15px] mt-[20px] text-black'>
        <h1 className=" font-bold">{title}</h1>
        <h3 className="mt-[20px] mb-[25px]">{price}</h3>
      </div>
       <div className="flex justify-center">


<a href="#" className='rounded-lg h-0 w-10 text-blue-900'>
<div className="rounded-full w-[30px] h-[30px] bg-[#EDEEEC] hover:bg-white">
 <i className="fa-solid fa-eye pl-1.5 pt-2 cursor-pointer"></i>
</div>
</a>
<a href="#" className='rounded-lg  h-10 w-10 text-blue-900'>
<div className="rounded-full w-[30px] h-[30px] bg-[#EDEEEC] hover:bg-white">
 <i className="fa-solid fa-bag-shopping pl-2 pt-2 cursor-pointer"></i>
</div>
</a>
 
</div>

    </div>
  )
}
