import React from 'react'
import Header from '../../components/header/Header'
import ServicesCarousel from '../../components/menus/ServicesCarousel'
import Membership from '../../components/menus/Membership'
import AboutUs from '../../components/menus/AboutUs'
import Testimonials from '../../components/menus/Testimonials'





const Home = () => {
  return (
    <div>
        <Header />
        <ServicesCarousel />
        <Membership />
        <AboutUs />
        <Testimonials />
    
    </div>
  )
}

export default Home