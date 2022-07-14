import React from 'react'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import ContactUs from '../components/contactUs'
import ProductCard from '../components/products/productCard'
import contact from '../imgs/contact.jpg'
import Caroussel from '../components/home/caroussel'
import Slider from '../components/Slider/Slider'
import prod1 from '../imgs/products/prod1.jpeg'
import prod2 from '../imgs/products/prod2.jpeg'
import prod3 from '../imgs/products/prod3.jpeg'
import prod4 from '../imgs/products/prod4.jpg'
import prod5 from '../imgs/products/prod5.jpeg'

export default function Products() {
  return (
    <div>
        <div className='w-[full] sm:w-[full] mb-[50px] mt-[-150px] '>
            <img className='w-full sm:w-[200px] h-[300px] sm:h-[600px]' src={contact} alt='products section'/>
        </div>
        <div className='grid grid-cols-1 sm:grid sm:grid-cols-5 xl:grid-cols-6 justify-items-center justify-center mb-[50px]'>
            <div className='w-[200px] h-[200px]  pt-[50px] text-black text-center hover:bg-[#EDEEEC] cursor-pointer'>
                <i className='fa-solid fa-3x fa-layer-group mb-[10px] text-black justify-center' ></i>
                <h5>All products</h5>
            </div>
            <div className='w-[200px] h-[200px] pt-[50px] text-black text-center  hover:bg-[#EDEEEC] cursor-pointer'>
                <i className='fa-solid fa-3x fa-bed mb-[10px] text-black ' ></i>
                <h5>Panneaux Mélaminé</h5>   
            </div>         {/*  w-[250px] */}
            <div className='w-[200px] h-[200px] pt-[50px] text-black text-center hover:bg-[#EDEEEC] cursor-pointer'>
                <i className='fa-solid fa-3x fa-kitchen-set mb-[10px] text-black ' ></i>
                <h5>Panneaux High Gloss</h5>
            </div>
            <div className='w-[200px] h-[200px] pt-[50px] text-black text-center  hover:bg-[#EDEEEC] cursor-pointer'>
                <i className='fa-solid fa-3x fa-building mb-[10px] text-black ' ></i>
                <h5>Panneaux Placage</h5>
            </div>
            <div className='w-[200px] h-[200px] pt-[50px] text-black text-center hover:bg-[#EDEEEC] cursor-pointer'>
                <i className='fa-solid fa-3x fa-toilet-portable mb-[10px] text-black ' ></i>
                <h5>Panneaux Digital Polylac</h5>
            </div>

            <div className='w-[200px] h-[200px] pt-[50px] text-black text-center hover:bg-[#EDEEEC] cursor-pointer'>
                <i className='fa-solid fa-3x fa-toilet mb-[10px] text-black ' ></i>
                <h5>Panneaux Polylac</h5>
            </div>

        </div>
        <div className='grid grid-cols-1 sm:grid sm:grid-cols-4 justify-items-center justify-center mb-[100px]'>
            <ProductCard title={'PM-8546'} price={'13,40 €/m²'} img={prod1}/>
            <ProductCard title={'PM-8546'} price={'13,40 €/m²'} img={prod2}/>
            <ProductCard title={'PM-8546'} price={'13,40 €/m²'} img={prod3}/>
            <ProductCard title={'PM-8546'} price={'13,40 €/m²'} img={prod4}/>
            <ProductCard title={'PM-8546'} price={'13,40 €/m²'} img={prod4}/>
            <ProductCard title={'PM-8546'} price={'13,40 €/m²'} img={prod4}/>
            <ProductCard title={'PM-8546'} price={'13,40 €/m²'} img={prod4}/>
            {/* <ProductCard /> */}
        </div>
        <ContactUs />
    </div>
  )
}
