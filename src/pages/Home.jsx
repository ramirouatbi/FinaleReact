import React from 'react'
import Clients from '../components/rates/clients'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import Layout from '../components/layout/layout'
import Missions from '../components/home/missions'
import ContactUs from '../components/contactUs'
import ProductsHome from '../components/productsHome'
import Caroussel from '../components/home/caroussel'
import TypeWriterEffect from 'react-typewriter-effect';
import GuideYou from '../components/home/guideYou'
import Slider from '../components/Slider/Slider'

export default function Home() {
  return (
    <div className=''>
        {/* <Header /> */}
        <Slider />
        {/* <div className='flex justify-center'>
        <TypeWriterEffect
          textStyle={{ fontFamily: 'Red Hat Display', color: '#3F3D56', fontWeight: 500, fontSize: '3.5em', }}
          startDelay={3000}
          cursorColor="#3F3D56"
          multiText={['SELECT YOUR STYLE','OUR PRODUCTS !',]}
          multiTextDelay={2000}
          typeSpeed={10}
        />
        </div> */}
        <ProductsHome />
        <Missions />
        <Clients />
        <GuideYou />
        <ContactUs />

        {/* <Footer /> */}
    </div>
  )
}
