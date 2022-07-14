import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

const products = [
      {id:1 , name: "ACRYMATT PANELS" , url :"https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
      {id:2 , name: "STANDART ACRYLIC PANELS" , url :"https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
      {id:3 , name: "PREMIUM PANELS" , url :"https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
      {id:4 , name: "ANTI-SCRATCH" , url :"https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},    
];

export default function ProductsHome() {
  return (
    

          <div>
            <div className='w-[full] flex justify-center mb-[100px]'>
              <div className='w-[full] text-center justify-center h-[100px] mt-[80px]'>
              <TypeWriterEffect
                textStyle={{ fontFamily: 'Red Hat Display', color: '#3F3D56', fontWeight: 500, fontSize: '40px', }}
               startDelay={3000}
               cursorColor="#3F3D56"
               multiText={['SELECT YOUR STYLE','OUR PRODUCTS !']}
                multiTextDelay={2000}
               typeSpeed={10}
              />
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-4 justify-items-center w-[full] h-[650px] mb-[1900px] sm:mb-[20px]'>

          {
                products.map((produit) => <div className='mb-[100px] sm:mb-[50px] cursor-pointer hover:translate-y-16'>
                  <img className='w-[350px] h-[500px] mb-[20px]' src={produit.url}  alt='product img'/>
                  <h1 className='text-center text-black text-xl'>{produit.name}</h1>
                  </div>
                  )
          }
        </div>
      </div>

  )
}
