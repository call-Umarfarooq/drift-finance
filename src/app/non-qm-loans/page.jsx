import React from 'react'
import TopBar from '@/components/TopBar'
import NonQMLoanHero from '@/components/NonQMLoanHero'
import NonQMLoanContent from '@/components/NonQMLoanContent'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

const NonQMLoanPage = () => {
  return (
    <main className="w-full min-h-screen bg-white font-inter">
      <TopBar />
      <NonQMLoanHero />
      <NonQMLoanContent />
      <FAQ />
      <div className='mt-[40px] md:mt-20'></div>
      <Testimonials />
      <div className='mt-[40px] md:mt-20'></div>

       <CTA/>
      <Footer />
    </main>
  )
}

export default NonQMLoanPage
