import React from 'react'
import TopBar from '@/components/TopBar'
import Hero from '@/components/Hero'
import ServicesCards from '@/components/ServicesCards'
import LogoTicker from '@/components/LogoTicker'
import AboutUs from '@/components/AboutUs'
import WhyChooseUs from '@/components/WhyChooseUs'
import FullSuiteCards from '@/components/FullSuiteCards'
import Testimonials from '@/components/Testimonials'
import Founders from '@/components/Founders'
import FAQ from '@/components/FAQ'
import ContactUs from '@/components/ContactUs'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main className="w-full min-h-screen bg-white font-inter">
      <TopBar />
      <Hero />
      <ServicesCards />
      <div className='mt-[40px] md:mt-20'></div>
      <LogoTicker />
      <div className='mt-[40px] md:mt-20'></div>
      <AboutUs />
      <div className='mt-[40px] md:mt-20'></div>
      <WhyChooseUs />
      <div className='mt-[40px] md:mt-20'></div>
      <FullSuiteCards />
      <div className='mt-[40px] md:mt-20'></div>
      <Testimonials />
      <div className='mt-[40px] md:mt-20'></div>
      <Founders />
      <div className='mt-[40px] md:mt-20' ></div>
      <FAQ />
      <div className='mt-[40px] md:mt-20'></div>
      <ContactUs />
      <div className='mt-[40px] md:mt-20'></div>
      <CTA />
      <Footer />
    </main>
  )
}

export default page